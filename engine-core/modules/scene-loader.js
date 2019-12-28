import { GetState, SetState } from '../main.js';
import { Scenes } from '../scenes/scenes.js';
import {
  CreateElement
} from './index.js';

const SceneLoader = () => {
  const state = GetState();

  if (state.currentScene !== state.previousScene) {
    if (state.canvasFader.style.backgroundColor === '') {
      state.canvasFader.style.backgroundColor = `rgba(0, 0, 0, ${state.canvasFaderAlpha})`;
    }

    if (state.canvasFaderAlpha >= 1) {
      const sceneElements = Scenes[state.currentScene];

      for (let element in state.canvasObjectModel) {
        delete state.canvasObjectModel[element];
      }

      sceneElements.forEach(sceneElement => {
        CreateElement(sceneElement);
      })

      state.previousScene = state.currentScene;
    } else {
      state.canvasFaderAlpha += 0.05;
    }

  } else if (state.canvasFader.style.backgroundColor !== '' && state.canvasFaderAlpha > 0) {
    state.canvasFaderAlpha -= 0.05;
  }

  state.canvasFader.style.backgroundColor = `rgba(0, 0, 0, ${state.canvasFaderAlpha})`;

  if (
      state.canvasFaderAlpha < 0.2 &&
      state.canvasFaderAlpha > -0.2 &&
      state.currentScene === state.previousScene
    ) {
    state.canvasFaderAlpha = 0;
  }

  SetState(state);
}

export { SceneLoader };
