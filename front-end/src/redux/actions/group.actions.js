import axios from 'axios';
const API = 'http://localhost:3001'

// Action Types
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS';
export const ADD_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const UPDATE_GROUP_SUCCESS = 'UPDATE_GROUP_SUCCESS';
export const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS';

// Action Creators

const getGroupsSuccess = (groups) => ({
  type: FETCH_GROUPS_SUCCESS,
  payload: groups,
});

const addGroupSuccess = (group) => ({
  type: ADD_GROUP_SUCCESS,
  payload: group,
});

const updateGroupSuccess = (id) => ({
  type: UPDATE_GROUP_SUCCESS,
  payload: id,
});

const deleteGroupSuccess = (id) => ({
  type: DELETE_GROUP_SUCCESS,
  payload: id,
});

// Thunk for fetching groups
export const getGroups = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/groups`);
    dispatch(getGroupsSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error fetching groups:', error);
  }
};

// Thunk for creating a group
export const addGroup = (groupData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/groups/create`, groupData);
    dispatch(createGroupSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error creating group:', error);
  }
};

// Thunk for updating a group
export const updateGroup = (groupId, groupData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API}/groups/${groupId}`, groupData);
    dispatch(updateGroupSuccess(response.data));
  } catch (error) {
    // Handle error
    console.error('Error updating group:', error);
  }
};

// Thunk for deleting a group
export const deleteGroup = (groupId) => async (dispatch) => {
  try {
    await axios.delete(`${API}/groups/${groupId}`);
    dispatch(deleteGroupSuccess(groupId));
  } catch (error) {
    // Handle error
    console.error('Error deleting group:', error);
  }
};
