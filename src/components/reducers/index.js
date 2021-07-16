import { combineReducers } from 'redux';
import restaurantsReducer from './restaurants-reducer';

const rootReducer = combineReducers({
  masterRestaurantList: restaurantsReducer
});

export default rootReducer