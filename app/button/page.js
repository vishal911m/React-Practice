"use client";

function Button({ label, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
    >
      {label}
    </button>
  );
}

export default function ButtonPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-semibold mb-4">Reusable Button Component</h1>
      <Button label="Submit" onClick={() => alert("Submitted!")} />
      <Button label="Cancel" onClick={() => alert("Cancelled!")} type="button" />
    </main>
  );
}
