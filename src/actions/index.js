import * as c from "./ActionTypes"

export const setCounter = (newCount) => {
  return {
    type: c.SET_COUNTER,
    newCount
  }
}