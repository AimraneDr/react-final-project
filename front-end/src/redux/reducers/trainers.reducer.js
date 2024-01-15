import {
  FETCH_TRAINERS_SUCCESS,
  ADD_TRAINER_SUCCESS,
  UPDATE_TRAINER_SUCCESS,
  DELETE_TRAINER_SUCCESS,
} from '../actions/trainer.actions';

const initialState = {
  trainers: [],
};

const trainerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAINERS_SUCCESS:
      return {
        ...state,
        trainers: action.payload,
      };

    case ADD_TRAINER_SUCCESS:
      return {
        ...state,
        trainers: [...state.trainers, action.payload],
      };

    case UPDATE_TRAINER_SUCCESS:
      return {
        ...state,
        trainers: state.trainers.map((trainer) =>
          trainer.id === action.payload.id ? action.payload : trainer
        ),
      };

    case DELETE_TRAINER_SUCCESS:
      return {
        ...state,
        trainers: state.trainers.filter((trainer) => trainer.id !== action.payload),
      };

    default:
      return state;
  }
};

export default trainerReducer;
