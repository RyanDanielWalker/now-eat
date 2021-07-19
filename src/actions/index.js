import * as c from "./ActionTypes"

export const selectedRestaurant = (restaurant) => ({
  type: c.SELECTED_RESTAURANT,
  restaurant
})

export const removeSelectedRestaurant = () => ({
  type: c.REMOVE_SELECTED_RESTAURANT
})