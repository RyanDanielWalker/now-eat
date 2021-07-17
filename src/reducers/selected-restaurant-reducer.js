import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { title, section } = action;
  switch (action.type) {
    case c.MAKE_SELECTED_HEADLINE:
      return Object.assign({}, state, {
        selectedHeadline: {
          title: title,
          section: section
        }
      })
    // case c.NULL_SELECTED_RESTAURANT:
    //   return null;
    default:
      return state
  }
}

//UPDATED STATE:
//{
// isLoading: false,
// headlines: [
//  {
//    title: "title",
//    section: "section"
//  },
//  {
//    title: "title",
//    section: "section"
//  }
// ],
// error: null,
// selectedHeadline: {
    // title: title,
    // section: section
// }
// }