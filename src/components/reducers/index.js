import { firestoreReducer } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';
import selectedRestautantReducer from './selected-restautant-reducer';

const rootReducer = combineReducers({
  masterRestaurantList: restaurantsReducer,
  firestore: firestoreReducer,
  selectedRestaurant: selectedRestautantReducer
});

export default rootReducer