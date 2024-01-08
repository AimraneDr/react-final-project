// reducers/students.js
import { stagiaires } from "../../data/data"; 
const initialState = {
    trainees: [...stagiaires],
  };
  
  const traineesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRAINEE':
        return {
          ...state,
          trainees: [...state.trainees, action.payload],
        };
      case 'UPDATE_TRAINEE':
        return {
          ...state,
          trainees: state.trainees.map(s => s.id === action.payload.id ? action.payload : s),
        };
      case 'DELETE_TRAINEE' : 
        return {
          ...state,
          trainees : state.trainees.filter(s => s !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default traineesReducer;
  