import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import * as a from '../actions';

const RestaurantHome = () => {
  //filter 'const restaurants' to only include restaurants that are not in users liked restaurants array.
  //Add new user collection if one does not exist based on the currently logged in user.

  const cardStyles = {
    padding: '10px',
    minWidth: '275px',
    width: '17vw',
    marginTop: '5vw',
    marginBottom: '3vw',
  }

  const buttonStyles = {
    marginBottom: '5vw'
  }

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
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
        <div className="ui centered grid">
          <Restaurant
            image={image}
            name={name}
            rating={rating}
            zip={zip}
            url={url}
            id={id}
            key={id}
            cardStyles={cardStyles}
            buttonStyles={buttonStyles}
          />
        </div>
      )
    })
    return (
      <React.Fragment>
        <>{renderList[count]}</>
        <div className="ui centered grid">
          <div style={buttonStyles} className="ui large buttons">
            <button onClick={clickButton} className="ui button"><i className="thumbs up outline icon"></i>Yes</button>
            <div className="or"></div>
            <button onClick={clickButton} className="ui button"><i className="thumbs down outline icon"></i>No</button>
          </div>
        </div>
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

export default withFirestore(RestaurantHome)