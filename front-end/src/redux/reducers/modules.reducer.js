// reducers/students.js
import { modules } from "../../data/data"; 
const initialState = {
    modules: [...modules],
  };
  
  const modulesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_MODULE':
        return {
          ...state,
          modules: [...state.modules, action.payload],
        };
      case 'UPDATE_MODULE':
        return {
          ...state,
          modules: state.modules.map(s => s.id === action.payload.id ? action.payload : s),
        };
      case 'DELETE_MODULE' : 
        return {
          ...state,
          modules : state.modules.filter(s => s !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default modulesReducer;
  