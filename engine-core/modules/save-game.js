import { GetState } from '../main.js';

const SaveGame = (slot) => {
  const state = GetState();
  const dataToSave = state.savedData;

  if (state.currentGameData.slot === '') {
    state.currentGameData.slot = slot;
    state.currentGameData.isUsed = true;
  }

  dataToSave[slot] = state.currentGameData;

  localStorage.setItem('castles:GoodVSEvil', JSON.stringify(dataToSave));
}

export { SaveGame };
