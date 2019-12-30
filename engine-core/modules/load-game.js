import { GetState, SetState } from '../main.js';

const LoadGame = (slot) => {
  const state = GetState();

  const savedData = JSON.parse(localStorage.getItem('castles:GoodVSEvil'));
  const loadedData = savedData[slot]

  state.currentGameData = loadedData;
  SetState(state);
  console.log(state)
}

export { LoadGame };
