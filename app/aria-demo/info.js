// ariaRolesInfo.js
// -----------------------------------------------------------------------------
// This file explains the uses of ARIA roles in a structured JavaScript format.
// -----------------------------------------------------------------------------

export const ariaRolesInfo = {
  purpose: "ARIA roles make UI elements understandable and usable for assistive technologies.",

  uses: [
    {
      id: 1,
      title: "Give meaning to non-semantic elements",
      description:
        "Used when <div> or <span> elements need semantic meaning, such as acting like a button.",
      example: `<div role=\"button\">Click me</div>`
    },
    {
      id: 2,
      title: "Communicate widget type and behavior",
      description:
        "ARIA roles describe the component's state and purpose (switch, checkbox, dialog).",
      example: `<div role=\"switch\" aria-checked=\"true\"></div>`
    },
    {
      id: 3,
      title: "Improve keyboard + screen reader navigation",
      description:
        "Landmark roles like navigation, main, contentinfo allow fast screen-reader navigation.",
      example: `<main role=\"main\"></main>`
    },
    {
      id: 4,
      title: "Announce dynamic updates (live regions)",
      description:
        "Useful in React for showing alerts, status messages, or auto-updating UI.",
      example: `<div role=\"alert\">Incorrect password</div>`
    },
    {
      id: 5,
      title: "Create structure inside complex widgets",
      description:
        "Roles define parent-child relationships (tablist → tab → tabpanel).",
      example:
        `<div role=\"tablist\"><button role=\"tab\">Item</button></div>`
    },
    {
      id: 6,
      title: "Provide semantics for components HTML does not support natively",
      description:
        "Useful for tooltips, progressbars, sliders, dialogs, switches, grids.",
      example: `<div role=\"tooltip\">Info</div>`
    },
    {
      id: 7,
      title: "Support custom design systems & UI libraries",
      description:
        "Frameworks like Tailwind, MUI, Chakra rely on ARIA roles for accessibility.",
      example: `<div role=\"dialog\" aria-modal=\"true\"></div>`
    },
    {
      id: 8,
      title: "Indirect SEO benefits by improving accessibility",
      description:
        "Landmark roles improve usability & Lighthouse accessibility score.",
      example: `<nav role=\"navigation\"></nav>`
    }
  ],

  summary:
    "ARIA roles improve accessibility by describing purpose, structure, and behavior of UI elements, especially custom components.",
};

// -----------------------------------------------------------------------------
// Usage Example in a JavaScript Project
// import { ariaRolesInfo } from './ariaRolesInfo.js'
// console.log(ariaRolesInfo.uses)
// -----------------------------------------------------------------------------
