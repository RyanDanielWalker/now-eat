import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';
import selectedRestaurantReducer from './selected-restaurant-reducer';

const rootReducer = combineReducers({
  allRestaurants: restaurantsReducer,
  selectedRestaurant: selectedRestaurantReducer,
  firestore: firestoreReducer,
});

export default rootReducer;