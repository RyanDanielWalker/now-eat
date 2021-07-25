import * as c from './../actions/ActionTypes';

const formValueReducer = (state = "", action) => {
  switch (action.type) {
    case c.HANDLE_FORM_VALUE_CHANGE:
      return {
        value: action.value
      };
    default:
      return state;
  }
};

export default formValueReducer;