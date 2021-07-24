import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import * as a from '../actions';
import PropTypes from 'prop-types';

const RestaurantHome = (props) => {
  //filter 'const restaurants' to only include restaurants that are not in users liked restaurants array.

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
  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  const users = useSelector(state => state.firestore.ordered.users);
  const count = useSelector(state => state.counter.count);
  console.log("Current User", currentUserId);
  console.log("Restaurants", restaurants);
  console.log("Count", count);
  console.log("Users", users);



  const counterGoesUp = () => {
    const newCount = count + 1
    dispatch(a.increaseCounter(newCount));
  }

  const onClickingYes = () => {
    //   //add restaurant id to liked movie array where doc.id === user.id
    //   //counter goes up
    firestore
      .collection('users')
      .doc(currentUserId)
      .get()
      .then((doc) => {
        const prevLikedArray = doc.data()['likedRestaurants']
        const propertiesToUpdate = {
          likedRestaurants: [...prevLikedArray, restaurants[count]['id']]
        }
        return (
          firestore
            .update(
              {
                collection: 'users',
                doc: currentUserId,
              },
              propertiesToUpdate
            )
        )
      })
    counterGoesUp()
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
            <button onClick={onClickingYes} className="ui button"><i className="thumbs up outline icon"></i>Yes</button>
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