'use strict'

import { GetState, SetState } from '../main.js';

const GenerateUnitData = (state, creationData) => {
  const name = creationData.name;
  let unitData;

  if (creationData.type === 'menuItem') {
    unitData = { ...state.menu.menuItems[name].unitData };
    unitData.position = creationData.position;
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

const CreateElement = ( creationData ) => {
  const state = GetState();
  const canvasObjectModel = state.canvasObjectModel;
  const unitData = GenerateUnitData(state, creationData);
  const unitId = GenerateUnitId(canvasObjectModel, creationData.name);

  canvasObjectModel[unitId] = unitData;
  canvasObjectModel[unitId].unitId = unitId;

  state.canvasObjectModel[unitId] = { ...canvasObjectModel[unitId] };

  SetState(state);
}

export { CreateElement };
