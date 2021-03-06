import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';
import Restaurant from './Restaurant';
import Matches from './Matches';
import RestaurantButtons from './RestaurantButtons';
import * as a from '../../actions';
import PropTypes from 'prop-types';

const RestaurantHome = (props) => {
  const { currentUser } = props;

  const cardStyles = {
    padding: '10px',
    minWidth: '275px',
    width: '275px',
    marginTop: '5vw',
    marginBottom: '3vw',
    textAlign: 'center',
    backgroundColor: '#EAF6C9'
  }

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
  const currentUserMatchedRestaurantIdArray = useSelector(state => state.firestore.data.users[currentUserId].matchedRestaurantArray);
  const currentUserFriend = useSelector(state => state.firestore.data.users[currentUserId].currentFriend);
  const restData = useSelector(state => state.firestore.data.restaurants)

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

  // const compareMatchesAtStart = () => {

  // }

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
            const propertiesToUpdate = {
              likedRestaurants: [...prevLikedArray, currentRestaurantId],
              matchedRestaurantArray: [...prevMatchedRestaurantArray, currentRestaurantId]
            }
            firestoreUpdateCurrentUser(propertiesToUpdate)
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

  if (isLoaded(restaurants, users)) {

    const restDataMatchList = currentUserMatchedRestaurantIdArray.map((match) => {
      return (
        restData[match]
      )
    })

    const renderMatches = restDataMatchList.map((match, index) => {
      const { name, url } = match;
      return (
        <Matches
          name={name}
          url={url}
          id={index}
          key={index}
        />
      )
    })

    const renderRestaurantList = restaurants.map((restaurant) => {
      const { image, name, rating, address, url, id } = restaurant;
      return (
        <Restaurant
          image={image}
          name={name}
          rating={rating}
          address={address}
          url={url}
          id={id}
          key={id}
          cardStyles={cardStyles}
        />
      )
    })

    return (
      <React.Fragment>
        <div className="ui grid">
          <div className="three wide column">
          </div>
          <div className="ten wide column">
            <div className='middle aligned column'>
              <>{renderRestaurantList[count]}</>
              <div className='ui centered grid'>
                <RestaurantButtons
                  onClickingYes={handleClickingYes}
                  increaseCounter={increaseCounter}
                />
              </div>
            </div>
          </div>
          <div className="three wide column">
            <div className="column">
              <div className="ui centered grid">
                <div style={cardStyles} className='ui centered card'>
                  <div className="content">
                    <div className="header">
                      <h5 style={{
                        textDecoration: 'underline',
                        textDecorationThickness: '3px',
                        textDecorationColor: '#222629'
                      }}>Matches with {currentUserFriend}</h5>
                    </div>
                    <>{renderMatches}</>
                  </div>
                </div>
              </div>
            </div>
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