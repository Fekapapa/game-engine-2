'use strict'

const MainMenuScene = () => [
  {
    type: 'menuItem',
    name: 'mainMenuBackground',
    position: { x: 640, y: 360 }
  },
  {
    type: 'menuItem',
    name: 'playButton',
    position: { x: 640, y: 360 }
  },
  {
    type: 'unit',
    name: 'iceElemental',
    position: { x: 200, y: 500 }
  },
  {
    type: 'unit',
    name: 'fireElemental',
    position: { x: 1060, y: 500 }
  }
]


export { MainMenuScene };
