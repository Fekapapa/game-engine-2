'use strict'

const UnitsInitialState = () => {
  return ({
    "units":{
      "iceElemental": {
        "unitData": {
          "name": "iceElemental",
          "frame": 0,
          "frameImg": 0,
          "frameCount": 24,
          "width": 500,
          "height": 600,
          "zIndex": 10,
          "facing": "right",
          "activity": "idle",
          "type": "unit",
        }
      }
    }
  })
}

export { UnitsInitialState };
