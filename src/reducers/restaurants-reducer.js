import * as c from '../actions/ActionTypes';

let initialState = {
  // isLoading: true,
  restaurants: [
    {
      name: "Wendy's",
      image: "https://s3-media4.fl.yelpcdn.com/bphoto/lqmMYlLRV-aoH73koWA6Ew/o.jpg",
      rating: "10/10",
      url: "https://www.learnhowtoprogram.com",
      zip: "97214"
    }
  ]
  // error: null,
  // currentHeadline: {}
}

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case c.REQUEST_RESTAURANTS:
//       return Object.assign({}, state, {
//         isLoading: true
//       });
//     case c.GET_RESTAURANTS_SUCCESS:
//       return Object.assign({}, state, {
//         isLoading: false,
//         restaurants: action.restaurants
//       });
//     case c.GET_RESTAURANTS_FAILURE:
//       return Object.assign({}, state, {
//         isLoading: false,
//         error: action.error
//       });

//     default:
//       return state;
//   }
// };