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

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    return fetch(`https://api.yelp.com/v3/businesses/search?location=portland`, { Authorization: 'PUT API KEY HERE' })
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