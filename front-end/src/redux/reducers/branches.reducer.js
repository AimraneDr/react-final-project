import {
  FETCH_BRANCHES_SUCCESS,
  ADD_BRANCH_SUCCESS,
  UPDATE_BRANCH_SUCCESS,
  DELETE_BRANCH_SUCCESS,
} from '../actions/branch.actions';

const initialState = {
  branches: [],
};

const branchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANCHES_SUCCESS:
      return {
        ...state,
        branches: action.payload,
      };

    case ADD_BRANCH_SUCCESS:
      return {
        ...state,
        branches: [...state.branches, action.payload],
      };

    case UPDATE_BRANCH_SUCCESS:
      return {
        ...state,
        branches: state.branches.map((branch) =>
          branch.id === action.payload.id ? action.payload : branch
        ),
      };

    case DELETE_BRANCH_SUCCESS:
      return {
        ...state,
        branches: state.branches.filter((branch) => branch.id !== action.payload),
      };

    default:
      return state;
  }
};

export default branchReducer;
