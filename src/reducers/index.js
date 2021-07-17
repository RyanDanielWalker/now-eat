// import { firestoreReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';
import selectedRestaurantReducer from './selected-restaurant-reducer';

const rootReducer = combineReducers({
  // error: restaurantsReducer,
  // isLoading: restaurantsReducer,
  headlines: restaurantsReducer,
  selectedHeadline: selectedRestaurantReducer

  // firestore: firestoreReducer,
});

export default rootReducer;