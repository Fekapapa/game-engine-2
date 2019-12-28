import { GetState, SetState } from '../main.js';
import { Scenes } from '../scenes/scenes.js';
import {
  CreateElement
} from './index.js';

const SceneLoader = () => {
  const state = GetState();

  if (state.currentScene !== state.previousScene) {
    const sceneElements = Scenes[state.currentScene];

    sceneElements.forEach(sceneElement => {
      CreateElement(sceneElement);
    })

    state.previousScene = state.currentScene;
    SetState(state);
    console.log(state)
  }
}

export { SceneLoader };
