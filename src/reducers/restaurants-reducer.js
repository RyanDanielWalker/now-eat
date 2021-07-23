import * as c from '../actions/ActionTypes';

let initialState = {
  restaurants: []
}

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SET_RESTAURANTS:
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
}

export default restaurantsReducer;