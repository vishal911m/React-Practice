// Containment Animation Explanation (JavaScript File)
// -------------------------------------------------
// This file explains visually what `contain: layout paint` does.
// You can paste this into a Next.js/React component to understand it better.

/*
Explanation:

No containment box (blue):
- Clicking it triggers a scale animation.
- Without containment, other boxes may shift or repaint during the animation.

Containment boxes (green):
- They use `contain: layout paint`.
- Animating anything inside them does NOT affect sibling elements.
- Only the element itself is recalculated and repainted.

Tailwind:
- `transition-transform` + `duration-500` for smooth scaling.
- `scale-150` toggled with React state.

Visual Summary:
[Blue box: animates, affects layout]   <- No contain
[Green boxes: isolated]                <- With `contain: layout paint`

Clicking the blue box stretches it. The green boxes remain unaffected.
This is the power of containment!
*/

// --------------------------------------------
// React Component Example (with Tailwind CSS)
// --------------------------------------------

import { useState } from "react";

export default function ContainmentDemo() {
  const [scaleBlue, setScaleBlue] = useState(false);
  const [scaleGreen, setScaleGreen] = useState(false);

  return (
    <div className="space-y-6 p-8 max-w-xl mx-auto">
      {/* Blue Box - No Containment */}
      <div>
        <h2 className="font-semibold mb-2">No Containment (Blue Box)</h2>
        <div
          onClick={() => setScaleBlue(!scaleBlue)}
          className={`w-32 h-32 bg-blue-400 cursor-pointer transition-transform duration-500 ${
            scaleBlue ? "scale-150" : ""
          }`}
        ></div>
      </div>

      {/* Green Boxes with Containment */}
      <div>
        <h2 className="font-semibold mb-2">With Containment (Green Boxes)</h2>
        <div className="flex space-x-4">
          <div
            style={{ contain: "layout paint" }}
            onClick={() => setScaleGreen(!scaleGreen)}
            className={`w-32 h-32 bg-green-400 cursor-pointer transition-transform duration-500 ${
              scaleGreen ? "scale-150" : ""
            }`}
          ></div>

          <div
            style={{ contain: "layout paint" }}
            className="w-32 h-32 bg-green-500"
          ></div>
        </div>
      </div>
    </div>
  );
}
