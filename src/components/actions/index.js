import * as c from './ActionTypes';
import axios from 'axios';

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
  const { name, city, rating, price, id } = restaurant;
  return {
    type: c.MAKE_SELECTED_RESTAURANT,
    name: name,
    city: city,
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

// export const makeApiCall = () => {
//   return dispatch => {
//     dispatch(requestRestaurants);
//     return fetch(`https://api.yelp.com/v3/businesses/search?location=portland`, {
//       method: 'GET',
//       mode: "no-cors",
//       headers: {
//         Authorization: 'Bearer ' + process.env.REACT_APP_YELP_API_KEY,
//         'Content-type': 'application/json'
//       }
//     })
//       .then(response => response.json())
//       .then(
//         (jsonifiedResponse) => {
//           dispatch(getRestaurantsSuccess(jsonifiedResponse.results));
//         })
//       .catch((error) => {
//         dispatch(getRestaurantsFailure(error));
//       });
//   }
// }

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestRestaurants);
    let yelpREST = axios.create({
      baseURL: "https://api.yelp.com/v3/",
      mode: "no-cors",
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "http:localhost:3000"
      }
    })
    return yelpREST('location', { params: { city: 'portland' } })
      .then(response => response.json())
      .then((jsonifiedResponse) => {
        dispatch(getRestaurantsSuccess(jsonifiedResponse.results));
      })
      .catch((error) => {
        dispatch(getRestaurantsFailure(error));
      });
  }
}