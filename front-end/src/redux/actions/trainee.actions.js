import axios from 'axios';
const API = 'http://localhost:3001'


// Action Types
export const FETCH_TRAINEES_SUCCESS = 'FETCH_TRAINEES_SUCCESS';
export const ADD_TRAINEE_SUCCESS = 'CREATE_TRAINEE_SUCCESS';
export const UPDATE_TRAINEE_SUCCESS = 'UPDATE_TRAINEE_SUCCESS';
export const DELETE_TRAINEE_SUCCESS = 'DELETE_TRAINEE_SUCCESS';

// Action Creators

const getTraineesSuccess = (trainees) => ({
  type: FETCH_TRAINEES_SUCCESS,
  payload: trainees,
});

const addTraineeSuccess = (trainee) => ({
  type: ADD_TRAINEE_SUCCESS,
  payload: trainee,
});

const updateTraineeSuccess = (id) => ({
  type: UPDATE_TRAINEE_SUCCESS,
  payload: id,
});

const deleteTraineeSuccess = (id) => ({
  type: DELETE_TRAINEE_SUCCESS,
  payload: id,
});

// Thunk for fetching trainees
export const getTrainees = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/trainees`);
    dispatch(getTraineesSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching trainees:', error);
  }
};

// Thunk for creating a trainee
export const addTrainee = (traineeData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/trainees/create`, traineeData);
    dispatch(createTraineeSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error creating trainee:', error);
  }
};

// Thunk for updating a trainee
export const updateTrainee = (traineeId, traineeData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API}/trainees/${traineeId}`, traineeData);
    dispatch(updateTraineeSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error updating trainee:', error);
  }
};

// Thunk for deleting a trainee
export const deleteTrainee = (traineeId) => async (dispatch) => {
  try {
    await axios.delete(`${API}/trainees/${traineeId}`);
    dispatch(deleteTraineeSuccess(traineeId));
  } catch (error) {
    // Handle error
    console.error('Error deleting trainee:', error);
  }
};
