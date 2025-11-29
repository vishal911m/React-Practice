// --------------------------------------------------------------
// breakdown-flex-shrink.js
// Breakdown file as an object

export const flexShrinkBreakdown = {
  question: "What is the default min-width of flex items?",
  correctAnswer: "auto (content-based)",
  explanation: {
    defaultBehavior:
      "Flex items default to min-width: auto, meaning they cannot shrink smaller than their intrinsic content size.",
    consequence:
      "This often causes overflow when long text is inside a flex item, because the item refuses to shrink.",
    whyNotZero:
      "If min-width were 0, the flex item would be allowed to shrink fully and wrap text instead of overflowing.",
    whenToUseZero:
      "Use min-width: 0 when you want a flex child to shrink and avoid overflow, especially with long text.",
  },
  demoExplanation:
    "The component demonstrates overflow with default min-width:auto and proper shrink behavior when min-width:0 is applied.",
};
