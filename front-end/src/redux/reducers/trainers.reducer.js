// reducers/students.js
import { trainers } from "../../data/data"; 
const initialState = {
    trainers: [...trainers],
  };
  
  const trainersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRAINER':
        return {
          ...state,
          trainers: [...state.trainers, action.payload],
        };
      case 'UPDATE_TRAINER':
        return {
          ...state,
          trainers: state.trainers.map(s => s.id === action.payload.id ? action.payload : s),
        };
      case 'DELETE_TRAINER' : 
        return {
          ...state,
          trainers : state.trainers.filter(s => s !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default trainersReducer;
  