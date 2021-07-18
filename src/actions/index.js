import * as c from './ActionTypes';

export const requestHeadlines = () => ({
  type: c.REQUEST_HEADLINES
});

export const getHeadlinesSuccess = (headlines) => ({
  type: c.GET_HEADLINES_SUCCESS,
  // headlines
  headlines: headlines.map((headline, index) => ({
    title: headline.title,
    abstract: headline.abstract,
    section: headline.section,
    key: index
  }))
})

export const getHeadlinesFailure = (error) => ({
  type: c.GET_HEADLINES_FAILURE,
  error
});

export const makeCurrentHeadline = (currentHeadLine) => {
  const { title, abstract, section, key } = currentHeadLine
  return {
    type: c.MAKE_CURRENT_HEADLINE,
    currentHeadLine: {
      title: title,
      abstract: abstract,
      section: section,
      key: key
    }

  }
}

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestHeadlines);
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getHeadlinesSuccess(jsonifiedResponse.results));
        })
      .catch((error) => {
        dispatch(getHeadlinesFailure(error));
      });
  }
}