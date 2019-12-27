'use strict'

import { SetState, GetState } from '../main.js';

const CalcClickedElements = (clickX, clickY, canvasObjectModel) => {
  const clickedElements = [];
  const notClickableObject = { name: 'unSelected', zIndex: -1 };

  const detectClickedElement = (element) => {
    const xRightEdge = element.position.x + element.width / 2;
    const xleftEdge = element.position.x - element.width / 2;
    const yTopEdge = element.position.y + element.height / 2;
    const yBottomEdge = element.position.y - element.height / 2;

    const isXMatch = clickX <= xRightEdge && clickX >= xleftEdge;
    const isYMatch = clickY <= yTopEdge && clickY >= yBottomEdge;

    const hit = isXMatch && isYMatch;

    if (hit) {
      const clickedElement = element;
      clickedElements.push(clickedElement);
    }
  }

  Object.values(canvasObjectModel).forEach(
      (element) => detectClickedElement(element)
  );

  return clickedElements
}

const CalcSelectedElement = (clickX, clickY, canvasObjectModel) => {
  const clickedElements = CalcClickedElements(clickX, clickY, canvasObjectModel)

  const sortedClickedElements = clickedElements.sort((a, b) => b.zIndex - a.zIndex);

  return sortedClickedElements[0];
}

const LeftButtonClicked = (clickX, clickY, canvasObjectModel) => {
  const selectedElement = CalcSelectedElement(clickX, clickY, canvasObjectModel);

  if (selectedElement.eventListener) {
    selectedElement.eventListener();
  }

  return selectedElement
}

/*const RightButtonClicked = (isSelected, isEnemyUnit, clickX, clickY) => {
  if (isSelected && isEnemyUnit) {
    return { ...{ x: clickX, y: clickY } };
  }
}*/

const CatchMouseEvent = (e) => {
  const clickX = e.offsetX;
  const clickY = 720 - e.offsetY;
  const clickedElements = [];
  const state = GetState();
  const canvasObjectModel = state.canvasObjectModel;
  //const isSelected = state.selected.name !== 'unSelected';
  //const isEnemyUnit = state.selected.class === 'enemyUnit';
  const goto = state.selected.goto
  const selectedElement = state.selected;

  console.log(`X: ${clickX}, Y: ${clickY}`)

  switch(e.button) {
    case 1:
      // if middle mouse button clicked, nothing happens.
      break;
    case 2:
      //state.selected.goto = RightButtonClicked(isSelected, isEnemyUnit, clickX, clickY);
      break;
    default:
      state.selected = LeftButtonClicked(clickX, clickY, canvasObjectModel);
      break;
  }
  console.log(state.selected);

  SetState(state);

  e.preventDefault();
  e.stopPropagation();
  return false;
}

const UserEventHandler = () => {
  const canvas = document.getElementById('gameCanvas');
  canvas.addEventListener('click', CatchMouseEvent, false);
  canvas.addEventListener('contextmenu', CatchMouseEvent, false);
}

export { UserEventHandler };
