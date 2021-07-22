import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';
import selectedRestaurantReducer from './selected-restaurant-reducer';
import counterReducer from './counter-reducer';

const rootReducer = combineReducers({
  allRestaurants: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  counter: counterReducer,
  firestore: firestoreReducer,
});

export default rootReducer;