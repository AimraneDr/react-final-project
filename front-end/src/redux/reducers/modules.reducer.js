import {
  FETCH_MODULES_SUCCESS,
  ADD_MODULE_SUCCESS,
  UPDATE_MODULE_SUCCESS,
  DELETE_MODULE_SUCCESS,
} from '../actions/module.actions';

const initialState = {
  modules: [],
};

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODULES_SUCCESS:
      return {
        ...state,
        modules: action.payload,
      };

    case ADD_MODULE_SUCCESS:
      return {
        ...state,
        modules: [...state.modules, action.payload],
      };

    case UPDATE_MODULE_SUCCESS:
      return {
        ...state,
        modules: state.modules.map((module) =>
          module.id === action.payload.id ? action.payload : module
        ),
      };

    case DELETE_MODULE_SUCCESS:
      return {
        ...state,
        modules: state.modules.filter((module) => module.id !== action.payload),
      };

    default:
      return state;
  }
};

export default moduleReducer;
