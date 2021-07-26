import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import RestaurantButtons from './RestaurantButtons';
import * as a from '../../actions';
import PropTypes from 'prop-types';

const RestaurantHome = (props) => {
  const { currentUser } = props;

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const firestore = useFirestore()
  const dispatch = useDispatch()
  const currentUserId = currentUser.uid;
  const restaurants = useSelector(state => state.firestore.ordered.restaurants);
  const users = useSelector(state => state.firestore.ordered.users);
  const count = useSelector(state => state.counter.count);
  const currentUserMatchedRestaurantArray = useSelector(state => state.firestore.data.users[currentUserId].matchedRestaurantArray);

  const increaseCounter = () => {
    const newCount = count + 1
    dispatch(a.setCounter(newCount));
  }

  const firestoreUpdateCurrentUser = (propertiesToUpdate) => {
    return (
      firestore.update({
        collection: 'users',
        doc: currentUserId,
      },
        propertiesToUpdate
      )
    )
  }

  ///////////////////////////////////////////////////////////
  ////////////////////// WAR ZONE ///////////////////////////
  ///////////////////////////////////////////////////////////
  const renderMatchBox = () => {
    firestore
      .collection('users')
      .doc(currentUserId)
      .get()
      .then((doc) => {
        const matchedRestaurantArray = doc.data().matchedRestaurantArray
        matchedRestaurantArray.map((match) => {
          return (
            <div>
              <h1>{match}</h1>
            </div>
          )
        })
      })
  }

  const handleClickingYes = () => {
    firestore
      .collection('users')
      .doc(currentUserId)
      .get()
      .then((doc) => {
        const currentRestaurantId = restaurants[count]['id']
        const prevLikedArray = doc.data().likedRestaurants
        const friendRestaurantArray = doc.data().friendRestaurantArray
        const prevMatchedRestaurantArray = doc.data().matchedRestaurantArray
        if (!prevLikedArray.includes(currentRestaurantId)) {
          if (friendRestaurantArray.includes(currentRestaurantId)) {
            console.log("MOTHER FREAKIN' MATCH!")
            const propertiesToUpdate = {
              likedRestaurants: [...prevLikedArray, currentRestaurantId],
              matchedRestaurantArray: [...prevMatchedRestaurantArray, currentRestaurantId]
            }
            firestoreUpdateCurrentUser(propertiesToUpdate)
              .then(renderMatchBox())
          } else {
            const propertiesToUpdate = {
              likedRestaurants: [...prevLikedArray, currentRestaurantId],
            }
            firestoreUpdateCurrentUser(propertiesToUpdate)
          }
        }
      }).then(() => {
        increaseCounter();
      })
  }

  if (isLoaded(restaurants, users, currentUserMatchedRestaurantArray)) {

    console.log("CURRENT USER MATCHED RESTAURANT ARRAY", currentUserMatchedRestaurantArray);

    const renderMatchList = currentUserMatchedRestaurantArray.map((match, index) => {
      return (
        <h1 key={index}>{match}</h1>
      )
    })

    const renderRestaurantList = restaurants.map((restaurant) => {
      const { image, name, rating, zip, url, id } = restaurant;
      return (
        <Restaurant
          image={image}
          name={name}
          rating={rating}
          zip={zip}
          url={url}
          id={id}
          key={id}
        />
      )
    })

    return (

      <React.Fragment>
        <div className="ui centered grid">
          <>{renderRestaurantList[count]}</>
        </div>
        <div>
          <>{renderMatchList}</>
        </div>
        <div className="ui centered grid">
          <RestaurantButtons
            onClickingYes={handleClickingYes}
            increaseCounter={increaseCounter} />
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