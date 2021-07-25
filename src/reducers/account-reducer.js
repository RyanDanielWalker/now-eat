import * as c from './../actions/ActionTypes';

const initialState = {
  signedIn: false,
  username: null,
  eating: false,
  formValue: ""
}

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.SIGN_OUT:
      return initialState
    case c.SIGN_IN:
      return {
        ...state,
        signedIn: true,
        username: action.username
      }
    case c.NOW_EATING:
      return {
        ...state,
        eating: true
      }
    case c.NOW_NOT_EATING:
      return {
        ...state,
        eating: false
      }
    case c.HANDLE_FORM_VALUE_CHANGE:
      return {
        ...state,
        formValue: action.newFormValue
      };
    default:
      return state;
  }
};

export default accountReducer;