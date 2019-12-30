'use strict'

const MainMenuInitialState = () => (
  {
    "menuItems":{
      "mainMenuBackground": {
        "unitData": {
          "name": "mainMenuBackground",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 1,
          "width": 1920,
          "height": 1080,
          "zIndex": -1,
          "facing": "none",
          "activity": "idle",
          "type": "staticImageElement",
        }
      },
      "playButton": {
        "unitData": {
          "name": "playButton",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 1,
          "width": 376,
          "height": 149,
          "zIndex": 0,
          "facing": "none",
          "activity": "idle",
          "type": "staticImageElement",
        }
      },
      "newGamePanelBackground": {
        "unitData": {
          "name": "newGamePanelBackground",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 1,
          "width": 461,
          "height": 607,
          "zIndex": 1,
          "facing": "none",
          "activity": "idle",
          "type": "staticImageElement",
        }
      },
      "newGameButton": {
        "unitData": {
          "name": "newGameButton",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 1,
          "width": 350,
          "height": 118,
          "zIndex": 2,
          "facing": "none",
          "activity": "idle",
          "type": "staticImageElement",
        }
      },
      "saveSlot": {
        "unitData": {
          "name": "saveSlot",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 1,
          "width": 350,
          "height": 118,
          "zIndex": 2,
          "facing": "none",
          "activity": "idle",
          "type": "staticImageElement",
        }
      }
    }
  }
)

export { MainMenuInitialState };
