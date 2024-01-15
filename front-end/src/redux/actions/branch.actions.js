import axios from 'axios';
const API = 'http://localhost:3001'


// Action Types
export const FETCH_BRANCHES_SUCCESS = 'FETCH_BRANCHES_SUCCESS';
export const ADD_BRANCH_SUCCESS = 'CREATE_BRANCH_SUCCESS';
export const UPDATE_BRANCH_SUCCESS = 'UPDATE_BRANCH_SUCCESS';
export const DELETE_BRANCH_SUCCESS = 'DELETE_BRANCH_SUCCESS';


const getBranchesSuccess = (branches) => ({
  type: FETCH_BRANCHES_SUCCESS,
  payload: branches,
});

const addBranchSuccess = (branch) => ({
  type: ADD_BRANCH_SUCCESS,
  payload: branch,
});

const updateBranchSuccess = (id) => ({
  type: UPDATE_BRANCH_SUCCESS,
  payload: id,
});

const deleteBranchSuccess = (id) => ({
  type: DELETE_BRANCH_SUCCESS,
  payload: id,
});

// Thunk for fetching branches
export const getBranches = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/branches`);
    dispatch(getBranchesSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching branches:', error);
  }
};

// Thunk for creating a branch
export const addBranch = (branchData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/branches/create`, branchData);
    dispatch(addBranchSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error creating branch:', error);
  }
};

// Thunk for updating a branch
export const updateBranch = (branchId, branchData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API}/branches/${branchId}`, branchData);
    dispatch(updateBranchSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error updating branch:', error);
  }
};

// Thunk for deleting a branch
export const deleteBranch = (branchId) => async (dispatch) => {
  try {
    await axios.delete(`${API}/branches/${branchId}`);
    dispatch(deleteBranchSuccess(branchId));
  } catch (error) {
    // Handle error
    console.error('Error deleting branch:', error);
  }
};
