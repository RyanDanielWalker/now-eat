import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  firestore: firestoreReducer,
});

export default rootReducer;