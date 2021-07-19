import * as c from './../actions/ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case c.SELECTED_RESTAURANT:
      return { ...state, ...action };
    case c.REMOVE_SELECTED_RESTAURANT:
      return {}
    default:
      return state
  }
}