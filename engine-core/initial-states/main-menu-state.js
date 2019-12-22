'use strict'

const MainMenuInitialState = () => {
  return ({
    "menuItems":{
      "landingBackground": {
        "unitData": {
          "name": "landingBackground",
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
      }
    }
  })
}

export { MainMenuInitialState };
