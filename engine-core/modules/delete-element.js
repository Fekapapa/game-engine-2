import { GetState, SetState } from '../main.js';

const DeleteElement = (unitId) => {
  const state = GetState();

  delete state.canvasObjectModel[unitId];
  
  SetState(state);
}

export { DeleteElement };
