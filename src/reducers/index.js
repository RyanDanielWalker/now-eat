import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import counterReducer from './counter-reducer';
import accountReducer from './account-reducer';
// import formValueReducer from './form-value-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  firestore: firestoreReducer,
  account: accountReducer,
  // formValue: formValueReducer
});

export default rootReducer;