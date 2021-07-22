import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';


function RestaurantList() {
  const restaurants = useSelector(state => state);
  const dispatch = useDispatch();
  const getRestaurants = () => {
    this.state.firestore
      .get({ collection: 'restaurants' })
      .then((restaurants) => {
        const firestoreRestaurants = {
          restaurants: restaurants.get()
        }
        // .then((restaurant) => {
        //   const firestoreRestaurant = {
        //     name: restaurant.get('name'),
        //     zip: restaurant.get('zip'),
        //     url: restaurant.get('url'),
        //     rating: restaurant.get('rating'),
        //     image: restaurant.get('image'),
        //     id: restaurant.id
        //   }
        dispatch(a.setRestaurants(firestoreRestaurants))
      })
  }

  useEffect(() => {
    getRestaurants();
  }, [])

  if (isLoaded(restaurants)) {
    const restaurantList = restaurants.map((restaurant) => {
      const { id, name, url, zip, image, rating } = restaurant;
      return (
        <h1>Bros</h1>
      )
    })
    return <>{restaurantList}</>
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default withFirestore(RestaurantList)