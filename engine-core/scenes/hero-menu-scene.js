"use strict";

const HeroMenuScene = () => [
  {
    type: "menuItem",
    name: "heroMenuBackground",
    position: { x: 640, y: 360 }
  },
  {
    type: "menuItem",
    name: "backButton",
    position: { x: (118 / 3) * 2, y: (80 / 3) * 2 },
    onclick: {
      newScene: "gameMenu"
    }
  },
  {
    type: "menuItem",
    name: "inventoryButton",
    position: { x: (208 / 3) * 2, y: ((1080 - 93) / 3) * 2 },
    onclick: {
      delete: "skillsMenuBackground0",
      create: [
        {
          type: "menuItem",
          name: "heroMenuBackground",
          position: { x: 640, y: 360 }
        }
      ]
    }
  },
  {
    type: "menuItem",
    name: "skillsButton",
    position: { x: (208 / 3) * 2, y: ((1080 - 255) / 3) * 2 },
    onclick: {
      delete: "heroMenuBackground0",
      create: [
        {
          type: "menuItem",
          name: "skillsMenuBackground",
          position: { x: 640, y: 360 }
        }
      ]
    }
  },
  {
    type: "menuItem",
    name: "armyButtonWide",
    position: { x: (208 / 3) * 2, y: ((1080 - 417) / 3) * 2 },
    onclick: {
      newScene: "armyMenu"
    }
  }
];

export { HeroMenuScene };
