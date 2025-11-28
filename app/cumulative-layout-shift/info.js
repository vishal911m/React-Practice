// ###############################################
// # What This Component Demonstrates (CLS Demo) #
// ###############################################

export function getCLSExplanation() {
  return {
    firstBox: {
      title: "First box — No aspect ratio",
      behavior:
        "Image loads late because no space is reserved, causing the content below to jump.",
      result: "Visible layout shift (CLS). Bad for UX and SEO."
    },

    secondBox: {
      title: "Second box — Has aspect-[3/2]",
      behavior:
        "Tailwind's aspect ratio utility reserves a fixed space before the image loads.",
      result:
        "Image fills reserved area smoothly. No layout shift, stable layout."
    },

    whyItMatters: {
      explanation:
        "CLS (Cumulative Layout Shift) is part of Google's Core Web Vitals.",
      benefit:
        "Using aspect-ratio is the recommended solution for preventing layout jumps with dynamic images."
    }
  };
}
