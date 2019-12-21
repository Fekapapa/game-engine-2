'use strict'

//import { MapData } from './data/mapData/map_01_data.js';
import { Images } from './assets/images/images.js';
import { MainMenuInitialState } from './initial-states/main-menu-state.js';
import {
//  UserEventHandler,
  RenderInitializer,
  CreateElement,
//  CreateWave,
  UpdateGameLoop,
  Render
} from './modules/index.js';

let state = {
  canvasObjectModel: {},
  initializedRenderData: {},
  menu: {},
  enemyUnits: {},
  playerUnits: {},
  resolution: '720p'
};

const Init = () => {
  const start = new Date();
  //UserEventHandler();
  state.initializedRenderData = RenderInitializer(Images().images, state.resolution);
  state.menu = MainMenuInitialState();

  const createLandingBackground = {
    type: 'menuItem',
    name: 'landingBackground',
    position: { x: 640, y: 360 }
  }

  CreateElement(createLandingBackground);

  const end =  new Date();
  console.log('Main init time: ', end-start)
  console.log(state)
  Main();
}

const SetState = (newState) => {
  state = { ...newState };
}

const GetState = () => {
  return { ...state }
};

const Main = () => {
  const toRender = [];
  UpdateGameLoop(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

Init();

export { SetState, GetState };
