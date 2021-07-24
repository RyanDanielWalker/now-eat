import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import * as a from '../actions';
import PropTypes from 'prop-types';

const RestaurantHome = (props) => {
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

  const firestore = useFirestore()
  const dispatch = useDispatch()
  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const currentUserId = props.currentUser.uid;
  console.log("Current User ID", currentUserId)
  const firestoreUsers = useSelector(state => state.firestore.ordered.users)
  console.log("Firestore user list", firestoreUsers)
  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  const count = useSelector(state => state.counter.count);

  const addToLikedRestaurants = () => {
    if (!firestoreUsers.includes(currentUserId)) {
      firestore.collection('users').add({ currentUserId })
    } else {
      console.log("This user's list already exists")
    }
    counterGoesUp();
  }

  const counterGoesUp = () => {
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
            <button onClick={addToLikedRestaurants} className="ui button"><i className="thumbs up outline icon"></i>Yes</button>
            <div className="or"></div>
            <button onClick={counterGoesUp} className="ui button"><i className="thumbs down outline icon"></i>No</button>
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

RestaurantHome.propTypes = {
  currentUser: PropTypes.object
}

export default withFirestore(RestaurantHome)