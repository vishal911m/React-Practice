export const functionTypeExplanation = {
  title: "Explanation of Async Function Prototype Question",

  question:
    "Q17: What is the output of console.log(Object.getPrototypeOf(async function(){}).constructor.name)?",

  correctAnswer: "b) AsyncFunction",

  why:
    "Because async functions have a special internal prototype whose constructor is AsyncFunction, not the normal Function constructor.",

  breakdown: {
    step1:
      "In JavaScript, every function has a prototype object. That prototype has a constructor property which tells you what type of function it is.",
    step2:
      "Normal functions use Function as their constructor. async functions use AsyncFunction.",
    step3:
      "So when we check Object.getPrototypeOf(async function(){}).constructor.name, we get 'AsyncFunction'.",
    mentalModel:
      "Async functions are built on top of Promises. They are treated by JavaScript as a special function type with their own constructor.",
    takeaway:
      "Async functions are not just syntactic sugar—they are categorized differently at the JavaScript engine level."
  },

  extraExamples: {
    normalFunction: "Function",
    asyncFunction: "AsyncFunction",
    generatorFunction: "GeneratorFunction",
    asyncGeneratorFunction: "AsyncGeneratorFunction"
  }
};
