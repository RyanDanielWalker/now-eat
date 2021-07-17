import * as c from '../actions/ActionTypes'

let initialState = {
  isLoading: false,
  restaurants: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_RESTAURANTS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_RESTAURANTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        restaurants: action.restaurants
        //if (!state.userList.contain(restaurants[0]))
        //selectedRestaurant: restaurants[0]
      });
    case c.GET_RESTAURANTS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};