
export const addGroup = (group) => ({
    type: 'ADD_GROUP',
    payload: group,
});

export const updateGroup = (group) => ({
    type: 'UPDATE_GROUP',
    payload: group,
});

export const deleteGroup = (group) => ({
    type: 'DELETE_GROUP',
    payload: group,
});
  