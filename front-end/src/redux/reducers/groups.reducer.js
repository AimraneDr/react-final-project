import {
  FETCH_GROUPS_SUCCESS,
  ADD_GROUP_SUCCESS,
  UPDATE_GROUP_SUCCESS,
  DELETE_GROUP_SUCCESS,
} from '../actions/group.actions';

const initialState = {
  groups: [],
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
      };

    case ADD_GROUP_SUCCESS:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };

    case UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id ? action.payload : group
        ),
      };

    case DELETE_GROUP_SUCCESS:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
      };

    default:
      return state;
  }
};

export default groupReducer;
