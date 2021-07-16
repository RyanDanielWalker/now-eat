import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, city, price, rating, id } = action;
  switch (action.type) {
    case c.MAKE_SELECTED_RESTAURANT:
      return Object.assign({}, state, {
        name: name,
        city: city,
        price: price,
        rating: rating,
        id: id
      })
    case c.NULL_SELECTED_RESTAURANT:
      return null;
    default:
      return state
  }
}
