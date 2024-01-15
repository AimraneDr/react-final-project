import axios from 'axios';
const API = 'http://localhost:3001'


// Action Types
export const FETCH_TRAINERS_SUCCESS = 'FETCH_TRAINERS_SUCCESS';
export const ADD_TRAINER_SUCCESS = 'CREATE_TRAINER_SUCCESS';
export const UPDATE_TRAINER_SUCCESS = 'UPDATE_TRAINER_SUCCESS';
export const DELETE_TRAINER_SUCCESS = 'DELETE_TRAINER_SUCCESS';

// Action Creators

const getTrainersSuccess = (trainers) => ({
  type: FETCH_TRAINERS_SUCCESS,
  payload: trainers,
});

const addTrainerSuccess = (trainer) => ({
  type: ADD_TRAINER_SUCCESS,
  payload: trainer,
});

const updateTrainerSuccess = (id) => ({
  type: UPDATE_TRAINER_SUCCESS,
  payload: id,
});

const deleteTrainerSuccess = (id) => ({
  type: DELETE_TRAINER_SUCCESS,
  payload: id,
});

// Thunk for fetching trainers
export const getTrainers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/trainers`);
    dispatch(getTrainersSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching trainers:', error);
  }
};

// Thunk for creating a trainer
export const addTrainer = (trainerData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/trainers/create`, trainerData);
    dispatch(createTrainerSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error creating trainer:', error);
  }
};

// Thunk for updating a trainer
export const updateTrainer = (trainerId, trainerData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API}/trainers/${trainerId}`, trainerData);
    dispatch(updateTrainerSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error updating trainer:', error);
  }
};

// Thunk for deleting a trainer
export const deleteTrainer = (trainerId) => async (dispatch) => {
  try {
    await axios.delete(`${API}/trainers/${trainerId}`);
    dispatch(deleteTrainerSuccess(trainerId));
  } catch (error) {
    // Handle error
    console.error('Error deleting trainer:', error);
  }
};
