import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore, withFirestore } from 'react-redux-firebase';
import * as a from './../actions';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router';

const Friends = (props) => {
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

  const handleSubmittingSelectFriend = (event) => {
    console.log('EVENT', event);
    event.preventDefault();
    const selectedFriend = event.target.name.value;
    console.log('SELECTED FRIEND', selectedFriend)
    firestore
      .collection('users')
      .doc(selectedFriend)
      .get()
      .then((doc) => {
        const selectedFriendRestaurantArray = doc.data().likedRestaurants
        const propertiesToUpdate = {
          friendRestaurantArray: selectedFriendRestaurantArray
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
    const userList = users.map((user) => {
      console.log("Users", users)
      const { username, id } = user;
      return (
        <option key={id} name={id} value={id}>{username}</option>
      )
    })
    return (
      <React.Fragment>
        <h1>Choose A Friend To Match With</h1>
        <form onSubmit={handleSubmittingSelectFriend}>
          <div className="ui form">
            <div className="field">
              <label>Select Friend</label>
              <select value='null' onChange={ } className="ui search dropdown">
                <option value="">Select Friend</option>
                {userList}
              </select>
            </div>
          </div>
          <button type='submit'>Select</button>
        </form>
        <button onClick={toggleEating} type="submit">Start</button>
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

Friends.propTypes = {
  currentUser: PropTypes.object
}

export default withFirestore(Friends);
