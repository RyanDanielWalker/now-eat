import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Carousel from 'react-bootstrap/Carousel';

function RestaurantList() {

  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const restaurants = useSelector(state => state.firestore.restaurants);

  if (isLoaded(restaurants)) {
    const restaurantList = restaurants.map((restaurant) => {
      const { id, name, url, zip, image, rating } = restaurant;
      return (
        <Carousel>
          <Carousel.Item key={id}>
            <img
              className="d-block w-100"
              src={image}
            />
            <Carousel.Caption>
              <h3>{name}</h3>
              <p>{url}</p>
              <p>{zip}</p>
              <p>{rating}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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

export default RestaurantList