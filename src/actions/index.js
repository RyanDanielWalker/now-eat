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

export const nowEating = () => {
  return {
    type: c.NOW_EATING
  }
}

export const nowNotEating = () => {
  return {
    type: c.NOW_NOT_EATING
  }
}

export const handleFormValueChange = (newValue) => {
  return {
    type: c.HANDLE_FORM_VALUE_CHANGE,
    newValue
  }
}