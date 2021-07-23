import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import * as a from '../actions';

const RestaurantList = () => {

  const cardStyles = {
    padding: '10px',
    textAlign: 'center',
    margin: 'auto',
    width: '50vw',
    marginTop: '5vw',
    boxShadow: '5px 5px 5px #AF9E0C'
  }

  const buttonStyles = {
    margin: 'auto',
    width: '25%',
    marginTop: '20px',
    display: 'block',
  }

  useFirestoreConnect([
    { collection: 'restaurants' }
  ]);

  const dispatch = useDispatch()
  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  const count = useSelector(state => state.counter.count);
  console.log(restaurants);
  console.log(count);

  const clickButton = () => {
    const newCount = count + 1
    dispatch(a.increaseCounter(newCount));
  }

  if (isLoaded(restaurants)) {
    const renderList = restaurants.map((restaurant) => {
      const { image, name, rating, zip, url, id } = restaurant;
      return (
        <div className="ui two column centered grid">
          <Restaurant
            image={image}
            name={name}
            rating={rating}
            zip={zip}
            url={url}
            id={id}
            key={id}
            clickButton={clickButton}
            cardStyles={cardStyles}
            buttonStyles={buttonStyles}
          />
        </div>
      )
    })
    return (
      <React.Fragment>
        <>{renderList[count]}</>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default withFirestore(RestaurantList)