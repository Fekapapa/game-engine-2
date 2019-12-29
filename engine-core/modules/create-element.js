'use strict'

import { GetState, SetState } from '../main.js';
import { DeleteElement } from './index.js';

const CreateOnclickFunction = (unitId, clickData) => (
  () => {
    if (clickData.delete && clickData.delete === 'itself') {
      DeleteElement(unitId)
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
  const canvasObjectModel = state.canvasObjectModel;
  const unitData = GenerateUnitData(state, creationData);
  const unitId = GenerateUnitId(canvasObjectModel, creationData.name);

  if (creationData.onclick) {
    unitData.onclick = CreateOnclickFunction(unitId, creationData.onclick);
  }
  
  canvasObjectModel[unitId] = unitData;
  canvasObjectModel[unitId].unitId = unitId;

  state.canvasObjectModel[unitId] = { ...canvasObjectModel[unitId] };

  SetState(state);
}

export { CreateElement };
