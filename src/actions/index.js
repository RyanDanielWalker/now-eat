import * as c from "./ActionTypes"

export const setRestaurants = (restaurants) => {
  return {
    type: c.SET_RESTAURANTS,
    restaurants
  }
}

// export const selectedRestaurant = (restaurant) => ({
//   type: c.SELECTED_RESTAURANT,
//   restaurant
// })

// export const removeSelectedRestaurant = () => ({
//   type: c.REMOVE_SELECTED_RESTAURANT
// })

export const increaseCounter = (newCount) => {
  return {
    type: c.INCREASE_COUNTER,
    newCount
  }
}