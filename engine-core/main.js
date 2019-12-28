'use strict'

//import { MapData } from './data/mapData/map_01_data.js';
import { Images } from './assets/images/images.js';
import { MainMenuInitialState } from './initial-states/main-menu-state.js';
import { UnitsInitialState } from './initial-states/units-state.js';
import {
  UserEventHandler,
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
  units: {},
  enemyUnits: {},
  playerUnits: {},
  selected: {},
  resolution: '720p'
};

const Init = () => {
  const start = new Date();
  UserEventHandler();
  state.initializedRenderData = RenderInitializer(Images().images, state.resolution);
  state.menu = MainMenuInitialState();
  state.units = UnitsInitialState();

  const createLandingBackground = {
    type: 'menuItem',
    name: 'landingBackground',
    position: { x: 640, y: 360 }
  }

  CreateElement(createLandingBackground);

  const createIceElemental = {
    type: 'unit',
    name: 'iceElemental',
    position: { x: 200, y: 500 }
  }

  CreateElement(createIceElemental);

  const createFireElemental = {
    type: 'unit',
    name: 'fireElemental',
    position: { x: 1060, y: 500 }
  }

  CreateElement(createFireElemental);

  const end =  new Date();
  console.log('Main init time: ', end-start)
  console.log(state)

  window.setTimeout(Main, 1000);
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
