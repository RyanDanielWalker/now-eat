import * as c from './ActionTypes';

export const requestRestaurants = () => ({
  type: c.REQUEST_RESTAURANTS
});

export const getRestaurantsSuccess = (restaurants) => ({
  type: c.GET_RESTAURANTS_SUCCESS,
  restaurants
});

export const getRestaurantsFailure = (error) => ({
  type: c.GET_RESTAURANTS_FAILURE,
  error
});

export const makeSelectedRestaurant = (restaurant) => {
  const { name, city, state, rating, price, id } = restaurant;
  return {
    type: c.MAKE_SELECTED_RESTAURANT,
    name: name,
    city: city,
    state: state,
    rating: rating,
    price: price,
    id: id
  }
}

export const nullSelectedRestaurant = () => {
  return {
    type: c.NULL_SELECTED_RESTAURANT
  }
}

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    return fetch(`https://api.yelp.com/v3/businesses/search?location=portland`, { Authorization: /*PUT API KEY HERE*/ '' })
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRestaurantsSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getRestaurantsFailure(error));
      });
  }
}