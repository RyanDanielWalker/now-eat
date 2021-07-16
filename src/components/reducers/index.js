import { firestoreReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';

const rootReducer = combineReducers({
  masterRestaurantList: restaurantsReducer,
  firestore: firestoreReducer
});

export default rootReducer