import {
  FETCH_TRAINEES_SUCCESS,
  ADD_TRAINEE_SUCCESS,
  UPDATE_TRAINEE_SUCCESS,
  DELETE_TRAINEE_SUCCESS,
} from '../actions/trainee.actions';

const initialState = {
  trainees: [],
};

const traineeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAINEES_SUCCESS:
      return {
        ...state,
        trainees: action.payload,
      };

    case ADD_TRAINEE_SUCCESS:
      return {
        ...state,
        trainees: [...state.trainees, action.payload],
      };

    case UPDATE_TRAINEE_SUCCESS:
      return {
        ...state,
        trainees: state.trainees.map((trainee) =>
          trainee.id === action.payload.id ? action.payload : trainee
        ),
      };

    case DELETE_TRAINEE_SUCCESS:
      return {
        ...state,
        trainees: state.trainees.filter((trainee) => trainee.id !== action.payload),
      };

    default:
      return state;
  }
};

export default traineeReducer;
