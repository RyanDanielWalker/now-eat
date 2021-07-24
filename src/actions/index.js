import * as c from "./ActionTypes"

export const increaseCounter = (newCount) => {
  return {
    type: c.INCREASE_COUNTER,
    newCount
  }
}