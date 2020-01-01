'use strict'

const CastleMenuScene = () => [
  {
    type: 'menuItem',
    name: 'castleMenuBackground',
    position: { x: 640, y: 360 }
  },
  {
    type: 'menuItem',
    name: 'backButton',
    position: { x: 1789/3*2, y: (1080-1007)/3*2 },
    onclick: {
      newScene: 'gameMenu'
    }
  },
  {
    type: 'menuItem',
    name: 'buildButton',
    position: { x: 1680/3*2, y: (1080-830)/3*2 },
    onclick: {}
  }
]

export { CastleMenuScene };
