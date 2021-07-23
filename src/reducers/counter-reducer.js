import * as c from './../actions/ActionTypes';

const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.INCREASE_COUNTER:
      return { ...state, count: action.newCount }
    default:
      return state;
  }
}

export default counterReducer;