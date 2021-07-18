import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { title, section, abstract } = action
  switch (action.type) {
    case c.MAKE_CURRENT_HEADLINE:
      return Object.assign({}, state, {
        currentHeadline: {
          title: title,
          abstract: abstract,
          section: section
        }
      })
    default:
      return state
  }
}

// //UPDATED STATE:
// //{
// // isLoading: false,
// // headlines: [
// //  {
// //    title: "title",
// //    section: "section"
// //  },
// //  {
// //    title: "title",
// //    section: "section"
// //  }
// // ],
// // error: null,
// // selectedHeadline: {
//     // title: title,
//     // section: section
// // }
// // }