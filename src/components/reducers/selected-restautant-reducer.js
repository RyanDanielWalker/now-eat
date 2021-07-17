import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { name, price, url, id } = action;
  switch (action.type) {
    case c.MAKE_SELECTED_RESTAURANT:
      return Object.assign({}, state, {
        name: name,
        price: price,
        url: url,
        id: id
      })
    case c.NULL_SELECTED_RESTAURANT:
      return null;
    default:
      return state
  }
}
