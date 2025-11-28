const q38Breakdown = {
  question: "When using React.memo, how do you customize the props comparison?",

  correctAnswer: "a) Pass a custom areEqual function as second arg",

  explanation: `
React.memo allows a component to skip re-rendering if its props did not change.
To customize how React compares props, you can pass a second argument:
React.memo(Component, areEqual)

The areEqual(previousProps, nextProps) function must return:
- true  ➝ props are considered equal ➝ skip re-render
- false ➝ props are different ➝ re-render
  `,

  example: {
    description:
      "Demo showing React.memo with a custom comparison function. Component re-renders only when 'count' prop changes, ignoring 'label'.",

    code: `
const Child = React.memo(
  function Child({ count, label }) {
    console.log("Child rendered");
    return <div>{label}: {count}</div>;
  },
  function areEqual(prev, next) {
    // Only trigger re-render when count changes
    return prev.count === next.count;
  }
);
    `,
  },

  keyPoints: [
    "React.memo() memoizes functional components.",
    "Second argument lets you fully control re-render logic.",
    "areEqual(prevProps, nextProps) should return true to skip rendering.",
    "Similar to shouldComponentUpdate in class components but for functions.",
  ],

  interviewSummary:
    "React.memo accepts a custom areEqual(prevProps, nextProps) function that decides whether a component should re-render.",
};

export default q38Breakdown;
