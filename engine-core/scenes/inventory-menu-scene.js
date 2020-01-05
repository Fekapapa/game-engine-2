"use strict";

const InventoryMenuScene = () => [
  {
    type: "menuItem",
    name: "inventoryMenuBackground",
    position: { x: 640, y: 360 }
  },
  {
    type: "menuItem",
    name: "backButton",
    position: { x: (118 / 3) * 2, y: (80 / 3) * 2 },
    onclick: {
      newScene: "gameMenu"
    }
  }
];

export { InventoryMenuScene };
