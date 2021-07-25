import * as c from './../actions/ActionTypes';

const initialState = {
  signedIn: false,
  username: null
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SIGN_OUT:
      return {
        ...state,
        signedIn: false,
        username: null
      }
    case c.SIGN_IN:
      return {
        ...state,
        signedIn: true,
        username: action.username
      }
    default:
      return state

  }
}

export default accountReducer;