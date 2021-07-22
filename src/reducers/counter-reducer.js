import * as c from './../actions/ActionTypes';

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.INCREASE_COUNTER:
      return { ...state, count: action.newCount }
    default:
      return state;
  }
}