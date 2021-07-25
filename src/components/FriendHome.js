import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore, withFirestore } from 'react-redux-firebase';
import * as a from '../actions';
import PropTypes from 'prop-types';
import FriendSelectionForm from './FriendSelectionForm';
// import { useHistory } from 'react-router';

const FriendHome = (props) => {
  //choose from list which friend you would like to see matches for
  //set state value of pairedFriend to user chosen 

  const firestore = useFirestore()
  const dispatch = useDispatch()

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const toggleEating = () => {
    dispatch(a.nowEating())
  }

  ///////////////////////////////////////////////////////////
  ////////////////////// WAR ZONE ///////////////////////////
  ///////////////////////////////////////////////////////////
  const users = useSelector(state => state.firestore.ordered.users);
  const currentUserId = props.currentUser.uid;
  const formValue = useSelector(state => state.account.formValue.value)

  const handleSubmittingSelectFriend = () => {
    console.log("FORM VALUE", formValue)
    const selectedFriend = formValue;
    console.log('SELECTED FRIEND', selectedFriend)
    firestore
      .collection('users')
      .doc(selectedFriend)
      .get()
      .then((doc) => {
        const selectedFriendRestaurantArray = doc.data().likedRestaurants
        const propertiesToUpdate = {
          friendRestaurantArray: [...selectedFriendRestaurantArray]
        }
        return (
          firestore.update({
            collection: 'users',
            doc: currentUserId,
          },
            propertiesToUpdate
          )
        )
      })
  }

  if (isLoaded(users)) {
    return (
      <React.Fragment>
        <h1>Choose A Friend To Match With</h1>
        <FriendSelectionForm />
        <button onClick={handleSubmittingSelectFriend} type="submit">Start</button>
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

FriendHome.propTypes = {
  currentUser: PropTypes.object
}

export default withFirestore(FriendHome);
