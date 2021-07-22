import * as c from '../actions/ActionTypes';

let initialState = {
  restaurants: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.SET_RESTAURANTS:
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
}