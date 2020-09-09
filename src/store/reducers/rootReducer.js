import authReducer from './authReducer';
import classReducer from './classReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  class: classReducer,
});

export default rootReducer;
