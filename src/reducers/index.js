import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import accountReducer from './account-reducer';
import eatingReducer from './eating-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  firestore: firestoreReducer,
  account: accountReducer,
  eating: eatingReducer
});

export default rootReducer;