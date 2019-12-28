'use strict'

//import { MapData } from './data/mapData/map_01_data.js';
import { Images } from './assets/images/images.js';
import { MainMenuInitialState } from './initial-states/main-menu-state.js';
import { UnitsInitialState } from './initial-states/units-state.js';
import {
  UserEventHandler,
  RenderInitializer,
  UpdateGameLoop,
  Render,
  SoundManager,
  SceneLoader
} from './modules/index.js';

let state = {
  canvasObjectModel: {},
  initializedRenderData: {},
  menu: {},
  units: {},
  enemyUnits: {},
  playerUnits: {},
  selected: {},
  resolution: '720p',
  currentScene: 'landingMenu',
  previousScene: ''
};

const Init = () => {
  const start = new Date();
  UserEventHandler();
  state.initializedRenderData = RenderInitializer(Images().images, state.resolution);
  state.menu = MainMenuInitialState();
  state.units = UnitsInitialState();

  const end =  new Date();
  console.log('Main init time: ', end-start)
  console.log(state)

  Main();
  //SoundManager('./engine-core/assets/sounds/music/main-menu-theme.mp3', true)
}

const SetState = (newState) => {
  state = { ...newState };
}

const GetState = () => {
  return { ...state }
};

const Main = () => {
  const toRender = [];
  SceneLoader();
  UpdateGameLoop(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
}

//Init();
const initButton = document.getElementById('initButton');
initButton.onclick = () => {
  initButton.style.display = 'none';
  Init();
};

export { SetState, GetState };
