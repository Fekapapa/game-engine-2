"use strict";

const UnitsInitialState = () => ({
  units: {
    iceElemental: {
      unitData: {
        name: "iceElemental",
        frame: 1,
        frameImg: 0,
        frameCount: 22,
        width: 500,
        height: 600,
        zIndex: 10,
        facing: "right",
        activity: "idle",
        type: "unit"
      }
    },
    fireElemental: {
      unitData: {
        name: "fireElemental",
        frame: 1,
        frameImg: 0,
        frameCount: 22,
        width: 500,
        height: 600,
        zIndex: 10,
        facing: "left",
        activity: "idle",
        type: "unit"
      }
    }
  }
});

export { UnitsInitialState };
