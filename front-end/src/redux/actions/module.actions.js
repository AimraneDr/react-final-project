import axios from 'axios';
const API = 'http://localhost:3001'


// Action Types
export const FETCH_MODULES_SUCCESS = 'FETCH_MODULES_SUCCESS';
export const ADD_MODULE_SUCCESS = 'CREATE_MODULE_SUCCESS';
export const UPDATE_MODULE_SUCCESS = 'UPDATE_MODULE_SUCCESS';
export const DELETE_MODULE_SUCCESS = 'DELETE_MODULE_SUCCESS';

// Action Creators

const getModulesSuccess = (modules) => ({
  type: FETCH_MODULES_SUCCESS,
  payload: modules,
});

const addModuleSuccess = (module) => ({
  type: ADD_MODULE_SUCCESS,
  payload: module,
});

const updateModuleSuccess = (id) => ({
  type: UPDATE_MODULE_SUCCESS,
  payload: id,
});

const deleteModuleSuccess = (id) => ({
  type: DELETE_MODULE_SUCCESS,
  payload: id,
});

// Thunk for fetching modules
export const getModules = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/modules`);
    dispatch(getModulesSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching modules:', error);
  }
};

// Thunk for creating a module
export const addModule = (moduleData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/modules/create`, moduleData);
    dispatch(createModuleSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error creating module:', error);
  }
};

// Thunk for updating a module
export const updateModule = (moduleId, moduleData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API}/modules/${moduleId}`, moduleData);
    dispatch(updateModuleSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error updating module:', error);
  }
};

// Thunk for deleting a module
export const deleteModule = (moduleId) => async (dispatch) => {
  try {
    await axios.delete(`${API}/modules/${moduleId}`);
    dispatch(deleteModuleSuccess(moduleId));
  } catch (error) {
    // Handle error
    console.error('Error deleting module:', error);
  }
};
