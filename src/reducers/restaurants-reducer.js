import * as c from '../actions/ActionTypes';

let initialState = {
  restaurants: [
    {
      name: "Wendy's",
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/lqmMYlLRV-aoH73koWA6Ew/o.jpg",
      rating: "10/10",
      url: "https://www.learnhowtoprogram.com",
      zip: "97214"
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.SET_RESTAURANTS:
      return { ...state, restaurants: action.restaurants };
    default:
      return state;
  }
}