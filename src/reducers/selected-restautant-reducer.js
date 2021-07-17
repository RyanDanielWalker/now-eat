import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { title, section } = action;
  switch (action.type) {
    case c.MAKE_SELECTED_RESTAURANT:
      return Object.assign({}, state, {
        title: title,
        section: section
      })
    case c.NULL_SELECTED_RESTAURANT:
      return null;
    default:
      return state
  }
}
