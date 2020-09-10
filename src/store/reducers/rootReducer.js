import authReducer from './authReducer';
import classReducer from './classReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  class: classReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
