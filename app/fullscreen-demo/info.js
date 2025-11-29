const fullscreenBreakdown = {
  question: "Which pseudocode selects the element currently being displayed as fullscreen?",
  correctAnswer: "a) :fullscreen",

  explanation: `
The CSS pseudo-class ':fullscreen' is used to target the element that is
currently in fullscreen mode. When an element enters fullscreen via
element.requestFullscreen(), this selector activates and allows you to
style the fullscreen element.
`,

  options: {
    a: {
      text: ":fullscreen",
      correct: true,
      why: "It is the official CSS pseudo-class for styling the fullscreen element."
    },
    b: {
      text: ":focus-visible",
      correct: false,
      why: "This applies to keyboard-focused elements, not fullscreen elements."
    },
    c: {
      text: ":document-fullscreen",
      correct: false,
      why: "This is not a real CSS pseudo-class. Fullscreen state is checked using JS via document.fullscreenElement."
    },
    d: {
      text: ":active",
      correct: false,
      why: "Represents an element being actively pressed, unrelated to fullscreen mode."
    }
  },

  interviewSummary: `
The correct selector is :fullscreen. This CSS pseudo-class applies to the
element that is currently in fullscreen mode after calling requestFullscreen().
`
};

export default fullscreenBreakdown;
