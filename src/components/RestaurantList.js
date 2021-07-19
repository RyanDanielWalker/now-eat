import React from 'react';
import { useSelector } from 'react-redux';

function RestaurantList() {
  const restaurants = useSelector((state) => state.allRestaurants.restaurants);
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
}

export default RestaurantList