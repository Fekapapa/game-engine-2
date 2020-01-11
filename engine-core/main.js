"use strict";

//import { MapData } from './data/mapData/map_01_data.js';
import { Images } from "./assets/images/images.js";
import { Sounds } from "./assets/sounds/sounds.js";
import { MenuInitialState } from "./initial-states/menu-state.js";
import { UnitsInitialState } from "./initial-states/units-state.js";
import {
  UserEventHandler,
  RenderInitializer,
  UpdateGameLoop,
  Render,
  SoundManager,
  SceneLoader,
  InitLocalStorage,
  SoundPreloader
} from "./modules/index.js";

let state = {
  canvasObjectModel: {},
  initializedRenderData: {},
  preloadedSounds: {},
  menu: {},
  units: {},
  enemyUnits: {},
  playerUnits: {},
  selected: {},
  savedData: {},
  unitsToDeleteList: [],
  currentGameData: {
    slot: "",
    level: 1,
    class: "Warrior"
  },
  resolution: "720p",
  scene: {
    currentScene: "mainMenu",
    previousScene: "",
    canvasFaderAlpha: 1
  }
};

const Init = () => {
  const start = new Date();
  state.savedData = InitLocalStorage();
  UserEventHandler();
  state.initializedRenderData = RenderInitializer(
    Images().images,
    state.resolution
  );
  state.preloadedSounds = SoundPreloader(Sounds().sounds);
  state.menu = MenuInitialState();
  state.units = UnitsInitialState();
  state.scene.canvasFader = document.getElementById("canvasFader");

  const end = new Date();
  console.log("Main init time: ", end - start);

  // This is line is here just to test the scene loader
  //window.setTimeout(() => {state.currentScene = 'none'}, 3000);

  Main();
  SoundManager("mainMenuTheme", true);
};

const SetState = newState => {
  state = { ...newState };
};

const GetState = () => {
  return { ...state };
};

const GetDirectState = () => {
  return state;
};

const Main = () => {
  const toRender = [];
  SceneLoader();
  UpdateGameLoop(toRender);
  Render(toRender);

  window.requestAnimationFrame(Main);
};

//Init();
const canvasContainer = document.getElementById("canvasContainerId");
canvasContainer.style.display = "none";

const initButton = document.getElementById("initButton");
initButton.onclick = () => {
  canvasContainer.style.display = "block";
  initButton.style.display = "none";
  Init();
};

export { SetState, GetState, GetDirectState };
