import { GetState, SetState } from "../main.js";
import { Scenes } from "../scenes/scenes.js";
import { CreateElement } from "./index.js";

const SceneLoader = () => {
  const state = GetState();

  if (state.scene.currentScene !== state.scene.previousScene) {
    if (state.scene.canvasFader.style.backgroundColor === "") {
      state.scene.canvasFader.style.backgroundColor = `rgba(0, 0, 0, ${state.scene.canvasFaderAlpha})`;
    }

    if (state.scene.canvasFaderAlpha >= 1) {
      const sceneElements = Scenes[state.scene.currentScene];

      for (let element in state.canvasObjectModel) {
        state.unitsToDeleteList.push(element);
      }

      sceneElements.forEach(sceneElement => {
        CreateElement(sceneElement);
      });

      state.scene.previousScene = state.scene.currentScene;
    } else {
      state.scene.canvasFaderAlpha =
        state.scene.canvasFaderAlpha === 0
          ? 0.2
          : state.scene.canvasFaderAlpha + 0.05;
    }
  } else if (
    state.scene.canvasFader.style.backgroundColor !== "" &&
    state.scene.canvasFaderAlpha > 0
  ) {
    state.scene.canvasFaderAlpha -= 0.05;
  }

  state.scene.canvasFader.style.backgroundColor = `rgba(0, 0, 0, ${state.scene.canvasFaderAlpha})`;

  if (
    state.scene.canvasFaderAlpha < 0.2 &&
    state.scene.canvasFaderAlpha > -0.2 &&
    state.scene.currentScene === state.scene.previousScene
  ) {
    state.scene.canvasFaderAlpha = 0;
  }

  SetState(state);
};

export { SceneLoader };
