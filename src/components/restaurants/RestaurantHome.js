import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import RestaurantButtons from './RestaurantButtons';
import * as a from '../../actions';
import PropTypes from 'prop-types';

const cardStyles = {
  padding: '10px',
  minWidth: '275px',
  width: '17vw',
  marginTop: '5vw',
  marginBottom: '3vw',
}

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

  const counterGoesUp = () => {
    const newCount = count + 1
    dispatch(a.setCounter(newCount));
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
        if (!prevLikedArray.includes(currentRestaurantId)) {
          if (friendRestaurantArray.includes(currentRestaurantId)) {
            console.log("MOTHER FREAKIN' MATCH!")
          }
          const propertiesToUpdate = {
            likedRestaurants: [...prevLikedArray, currentRestaurantId]
          }
          return (
            firestore.update({
              collection: 'users',
              doc: currentUserId,
            },
              propertiesToUpdate
            )
          )
        }
      }).then(counterGoesUp())
  }

  ///////////////////////////////////////////////////////////
  ////////////////////// WAR ZONE ///////////////////////////
  ///////////////////////////////////////////////////////////

  // const handleCheckingForMatches = () => {
  //   //if yes, look inside likedRestaurants array and friendRestaurantArray of current user
  //   //if same restaurant id occurs in both, alert match
  //   if ()
  // }

  if (isLoaded(restaurants, users)) {

    const renderList = restaurants.map((restaurant) => {
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
          cardStyles={cardStyles}
        />
      )
    })
    return (
      <React.Fragment>
        <div className="ui centered grid">
          <>{renderList[count]}</>
        </div>
        <div className="ui centered grid">
          <RestaurantButtons
            onClickingYes={handleClickingYes}
            counterGoesUp={counterGoesUp} />
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