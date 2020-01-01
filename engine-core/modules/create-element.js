'use strict'

import { GetState, SetState } from '../main.js';
import { SaveGame, LoadGame, SceneLoader } from './index.js';

const CreateSaveSlot = (state, creationData) => {
  const savedData = state.savedData;
  const newCreationData = {
    type: creationData.type,
    name: 'newGameButton',
    position: creationData.position,
    onclick: {
      saveGame: creationData.saveSlot,
      newScene: 'gameMenu'
    }
  };

  if (savedData[creationData.saveSlot].isUsed) {
    newCreationData.name = 'saveSlot';
    newCreationData.onclick = {
      loadGame: creationData.saveSlot,
      newScene: 'gameMenu'
    };
  }

  CreateElement(newCreationData)
}

const CreateOnclickFunction = (unitId, clickData, state) => (
  () => {
    console.log(state)
    if (clickData.saveGame) {
      SaveGame(clickData.saveGame)
    }

    if (clickData.loadGame) {
      LoadGame(clickData.loadGame)
    }

    if (clickData.newScene) {
      state.scene.currentScene = clickData.newScene;
    }

    if (clickData.delete && clickData.delete === 'itself') {
      state.unitsToDeleteList.push(unitId);
    }

    if (clickData.delete && clickData.delete !== 'itself') {
      state.unitsToDeleteList.push(clickData.delete);
    }

    if (clickData.create) {
      clickData.create.forEach(creationData => {
        CreateElement(creationData)
      })
    }
  }
)

const GenerateUnitData = (state, creationData) => {
  const name = creationData.name;
  let unitData;

  if (creationData.type === 'menuItem') {
    unitData = { ...state.menu.menuItems[name].unitData };
    unitData.position = creationData.position;
  }

  if (creationData.type === 'unit') {
    unitData = { ...state.units.units[name].unitData };
    unitData.position = creationData.position;
  }

  if (state.resolution === '720p') {
    unitData.width = unitData.width / 3 * 2;
    unitData.height = unitData.height / 3 * 2;
  }

  return unitData;
}

const GenerateUnitId = (canvasObjectModel, name) => {
  const sameUnitsList = [];
  let unitId = '';

  if (!canvasObjectModel[`${name}0`]) {
    unitId = `${name}0`;
    sameUnitsList.push(0);
  } else {
    for ( let key in canvasObjectModel ) {
      if (key.includes(name)) {
        sameUnitsList.push(Number(key.replace(name, '')));
      }
    }

    let maxIdNumber = Math.max(...sameUnitsList);

    unitId = `${name}${maxIdNumber + 1}`;
  }

  return unitId;
}

const CreateElement = (creationData) => {
  const state = GetState();

  if (creationData.name === 'isSaved') {
    CreateSaveSlot(state, creationData);
    return
  }

  const canvasObjectModel = state.canvasObjectModel;
  const unitData = GenerateUnitData(state, creationData);
  const unitId = GenerateUnitId(canvasObjectModel, creationData.name);

  if (creationData.onclick) {
    unitData.onclick = CreateOnclickFunction(unitId, creationData.onclick, state);
  }

  canvasObjectModel[unitId] = unitData;
  canvasObjectModel[unitId].unitId = unitId;

  state.canvasObjectModel[unitId] = { ...canvasObjectModel[unitId] };

  SetState(state);
}

export { CreateElement };
