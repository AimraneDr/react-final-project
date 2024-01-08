import { combineReducers } from 'redux';
import traineesReducer from './trainees.reducer';
import trainersReducer from './trainers.reducer';
import modulesReducer from './modules.reducer';
import groupsReducer from './groups.reducer';
import branchesReducer from './branches.reducer';

const rootReducer = combineReducers({
  trainees: traineesReducer,
  trainers: trainersReducer,
  modules: modulesReducer,
  groups: groupsReducer,
  branches: branchesReducer
});

export default rootReducer;