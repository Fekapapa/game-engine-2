const DeleteElements = state => {
  while (state.unitsToDeleteList.length > 0) {
    const unitId = state.unitsToDeleteList.splice(0, 1);
    delete state.canvasObjectModel[unitId];
  }

  return state;
};

export { DeleteElements };
