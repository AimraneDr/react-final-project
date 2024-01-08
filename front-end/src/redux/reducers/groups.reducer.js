// reducers/students.js
import { groups } from "../../data/data"; 
const initialState = {
    groups: [...groups],
  };
  
  const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_GROUP':
        return {
          ...state,
          groups: [...state.groups, action.payload],
        };
      case 'UPDATE_GROUP':
        return {
          ...state,
          groups: state.groups.map(s => s.id === action.payload.id ? action.payload : s),
        };
      case 'DELETE_GROUP' : 
        return {
          ...state,
          groups : state.groups.filter(s => s !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default groupsReducer;
  