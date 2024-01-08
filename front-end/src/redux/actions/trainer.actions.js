
export const addTrainer = (trainer) => ({
    type: 'ADD_TRAINER',
    payload: trainer,
});

export const updateTrainer = (trainer) => ({
    type: 'UPDATE_TRAINER',
    payload: trainer,
});

export const deleteTrainer = (trainer) => ({
    type: 'DELETE_TRAINER',
    payload: trainer,
});
  