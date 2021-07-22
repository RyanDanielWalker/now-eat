import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';


function RestaurantList() {
  // const restaurants = useSelector(state => state);
  // const dispatch = useDispatch();
  // const getRestaurants = () => {
  //   const response = restaurants.firestore.get({ collection: 'restaurants' })
  //   dispatch(a.setRestaurants(response))
  // }

  // useEffect(() => {
  //   getRestaurants();
  // }, [])

  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  console.log(restaurants)

  return (
    <h1>Bros</h1>
  )

}

export default withFirestore(RestaurantList)