import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import accountReducer from './account-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  firestore: firestoreReducer,
  account: accountReducer
});

export default rootReducer;