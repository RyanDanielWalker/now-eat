import * as c from './../actions/ActionTypes';

const initialState = {
  signedIn: false
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SIGN_OUT:
      return { ...state, signedIn: false }
    case c.SIGN_IN:
      return { ...state, signedIn: true }
    default:
      return state

  }
}

export default accountReducer;