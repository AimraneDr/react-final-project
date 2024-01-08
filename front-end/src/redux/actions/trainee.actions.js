
export const addTrainee = (trainee) => ({
    type: 'ADD_TRAINEE',
    payload: trainee,
});

export const updateTrainee = (trainee) => ({
    type: 'UPDATE_TRAINEE',
    payload: trainee,
});

export const deleteTrainee = (trainee) => ({
    type: 'DELETE_TRAINEE',
    payload: trainee,
});
  