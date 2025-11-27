function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export function importImagesUrls() {
  const imagesObject = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  return Object.values(imagesObject);
}
