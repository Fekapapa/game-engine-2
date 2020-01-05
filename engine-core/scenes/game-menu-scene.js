"use strict";

const GameMenuScene = () => [
  {
    type: "menuItem",
    name: "gameMenuBackground",
    position: { x: 640, y: 360 }
  },
  {
    type: "menuItem",
    name: "backButton",
    position: { x: (118 / 3) * 2, y: (80 / 3) * 2 },
    onclick: {
      newScene: "mainMenu"
    }
  },
  {
    type: "menuItem",
    name: "heroButton",
    position: { x: (1192 / 3) * 2, y: (100 / 3) * 2 },
    onclick: {
      newScene: "heroMenu"
    }
  },
  {
    type: "menuItem",
    name: "armyButton",
    position: { x: (1628 / 3) * 2, y: (100 / 3) * 2 },
    onclick: {
      newScene: "armyMenu"
    }
  },
  {
    type: "menuItem",
    name: "settingsButton",
    position: { x: (1827 / 3) * 2, y: (990 / 3) * 2 }
  },
  {
    type: "menuItem",
    name: "currentMissionMarker",
    position: { x: (287 / 3) * 2, y: ((1080 - 543) / 3) * 2 }
  }
];

export { GameMenuScene };
