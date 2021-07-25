import * as c from './../actions/ActionTypes';

const initialState = {
  nowEating: false
}

const eatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.NOW_EATING:
      return { ...state, nowEating: true }
    case c.NOW_NOT_EATING:
      return { ...state, nowEating: false }
    default:
      return state
  }
}

export default eatingReducer;