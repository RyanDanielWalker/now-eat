import * as c from "./ActionTypes"

export const setCounter = (newCount) => {
  return {
    type: c.SET_COUNTER,
    newCount
  }
}

export const userSignOut = () => {
  return {
    type: c.SIGN_OUT
  }
}

export const userSignIn = (username) => {
  return {
    type: c.SIGN_IN,
    username
  }
}