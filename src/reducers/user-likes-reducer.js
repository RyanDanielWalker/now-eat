import * as c from './../actions/ActionTypes'

const userLikesReducer = (state = initialState, action) => {
  switch (action.type) {
    case c.ADD_LIKED_RESTAURANT:
      return { ...state, action }
    default:
      return state;
  }
};

export default userLikesReducer;