'use strict'

import { GetState, SetState } from '../main.js';
//import { UpdateUnitState } from '../index.js';
//import { CollisionDetection } from '../index.js';
//import { TargetFinder } from '../index.js';
//import { FireStarter } from '../index.js';
//import { DeleteElement } from '../index.js';
//import { AreaDamage } from '../index.js';
//import { DamageDealer } from '../index.js';
//import { GenerateFrameName } from './partials/generateFrameName.js';
//import { GenerateFrameData } from './partials/generateFrameData/generateFrameData.js';

let timerHelper = 0;

const UpdateUnitData = (unitState) => {
  //let state = GetState();
  //const unit = updateUnitStateData.unitData;
  //const select = updateUnitStateData.selected;
  //const enemyList = updateUnitStateData.enemyList;
  //const towerList = updateUnitStateData.towerList;
  //const unitsToDeleteList = updateUnitStateData.unitsToDeleteList;
  //const unitsToDamageList = updateUnitStateData.unitsToDamageList;

  unitState.prevActivity = unitState.activity;

  //ClassDependentPreparations(unit, enemyList, towerList);
  //CheckSelected(select, unit);

  //if (!unitState.goto.x && unitState.class !== "tower") {
  //  unitState.activity = 'idle';
  //} else {
    //CalcPositionAndStatus(unit, unitsToDamageList, unitsToDeleteList);
  //}
  return unitState
}

const GenerateFrameName = (unitState) => {
  if (unitState.type === 'staticImageElement') {
    return unitState.activity + unitState.frameImg
  }

  if (unitState.activity !== unitState.prevActivity || unitState.frame === unitState.frameCount * 6) {
    unitState.frame = 0;
    unitState.frameImg = 0
  } else if (unitState.frame % 6 === 0) {
    unitState.frameImg++
  }

  unitState.frame++;

  return unitState.activity + unitState.frameImg
}

const GenerateFrameData = (unitData, frameName) => {
  let frameData = {
    'dx': unitData.position.x,
    'dy': unitData.position.y,
    'type': unitData.name,
    'zIndex': unitData.zIndex,
    'facing': unitData.facing,
    'frame': frameName,
    'width': unitData.width,
    'height': unitData.height
  };

  if (unitData.angle) { frameData.angle = unitData.angle };

  //frameData = HealthBar(frameData, unit);

  return frameData
}

const UpdateGameLoop = (toRender) => {
  timerHelper += 1;
  const start = new Date();

  let state = GetState();

  const enemyUnits = {};
  const playerUnits = {};
  const unitsToDeleteList = [];
  const unitsToDamageList = [];

  for (let unitId in state.canvasObjectModel) {
    let unitData = { ...state.canvasObjectModel[unitId] };
    const spriteData = state.initializedRenderData.preloadedImages[unitData.name];

    const unitState = UpdateUnitData(unitData);
    const frameName = GenerateFrameName(unitState);
    const frameData = GenerateFrameData(unitState, frameName);

    state.canvasObjectModel[unitId] = unitState;

    toRender.push(frameData);
  }

  state.enemyUnits = enemyUnits;
  state.playerUnits = playerUnits;

  //state = AreaDamage(state);
  //state = DamageDealer(state, unitsToDamageList, unitsToDeleteList);
  //state = DeleteElement(state, unitsToDeleteList);
  //state = CollisionDetection(state);
  //state = TargetFinder(state);
  //state = FireStarter(state);

  SetState(state);
  const end = new Date();

  if (timerHelper % 60 === 0) {
    //console.warn('Total game loop update time: ', end-start + ' ms')
    //console.log('Number of objects in Canvas Object Model: ', Object.keys(state.canvasObjectModel).length)
  }
}

export { UpdateGameLoop };
