// reducers/students.js
import { branches } from "../../data/data"; 
const initialState = {
    branches: [...branches],
  };
  
  const branchesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BRANCH':
        return {
          ...state,
          branches: [...state.branches, action.payload],
        };
      case 'UPDATE_BRANCH':
        return {
          ...state,
          branches: state.branches.map(s => s.id === action.payload.id ? action.payload : s),
        };
      case 'DELETE_BRANCH' : 
        return {
          ...state,
          branches : state.branches.filter(s => s !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default branchesReducer;
  