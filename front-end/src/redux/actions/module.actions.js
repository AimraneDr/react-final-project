
export const addModule = (module) => ({
    type: 'ADD_MODULE',
    payload: module,
});

export const updateModule = (module) => ({
    type: 'UPDATE_MODULE',
    payload: module,
});

export const deleteModule = (module) => ({
    type: 'DELETE_MODULE',
    payload: module,
});
  