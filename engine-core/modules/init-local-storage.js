import { GetState } from '../main.js';

const InitLocalStorage = () => {
  const state = GetState();

  if (localStorage.getItem('castles:GoodVSEvil') == undefined) {
    const savedData = {
      slot1: {
        isUsed: false,
        slot: 'slot1',
        level: 1,
        class: 'Mage'
      },
      slot2: {
        isUsed: false,
        slot: 'slot2',
        level: 1,
        class: 'Mage'
      },
      slot3: {
        isUsed: false,
        slot: 'slot3',
        level: 1,
        class: 'Mage'
      }
    };

    localStorage.setItem('castles:GoodVSEvil', JSON.stringify(savedData));

    return savedData;
  } else {
    return JSON.parse(localStorage.getItem('castles:GoodVSEvil'));
  }
}

export { InitLocalStorage };
