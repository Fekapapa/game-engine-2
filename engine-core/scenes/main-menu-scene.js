"use strict";

const MainMenuScene = () => [
  {
    type: "menuItem",
    name: "mainMenuBackground",
    position: { x: 640, y: 360 }
  },
  {
    type: "menuItem",
    name: "playButton",
    position: { x: 640, y: 360 },
    onclick: {
      delete: "itself",
      create: [
        {
          type: "menuItem",
          name: "newGamePanelBackground",
          position: { x: 640, y: 240 }
        },
        {
          type: "menuItem",
          name: "isSaved",
          position: { x: 640, y: 285 },
          saveSlot: "slot1"
        },
        {
          type: "menuItem",
          name: "isSaved",
          position: { x: 640, y: 195 },
          saveSlot: "slot2"
        },
        {
          type: "menuItem",
          name: "isSaved",
          position: { x: 640, y: 105 },
          saveSlot: "slot3"
        }
      ]
    }
  },
  {
    type: "unit",
    name: "iceElemental",
    position: { x: 200, y: 500 }
  },
  {
    type: "unit",
    name: "fireElemental",
    position: { x: 1060, y: 500 }
  }
];

export { MainMenuScene };
