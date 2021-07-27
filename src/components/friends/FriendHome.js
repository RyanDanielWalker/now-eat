import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded, useFirestore, withFirestore } from 'react-redux-firebase';
import * as a from '../../actions';
import PropTypes from 'prop-types';
import FriendSelectionForm from './FriendSelectionForm';

const FriendHome = (props) => {
  const { currentUser } = props;

  const formPageStyles = {
    marginTop: '10vh'
  }

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const firestore = useFirestore()
  const dispatch = useDispatch()

  const toggleEating = () => {
    dispatch(a.nowEating())
  }

  const currentUserId = currentUser.uid;
  const users = useSelector(state => state.firestore.ordered.users);
  const formValue = useSelector(state => state.account.formValue.value)

  const handleClickingStart = () => {
    const selectedFriendId = formValue;
    firestore
      .collection('users')
      .doc(selectedFriendId)
      .get()
      .then((doc) => {
        const docData = doc.data();
        const selectedFriendRestaurantArray = docData.likedRestaurants;
        const selectedFriendUserName = docData.username;
        const propertiesToUpdate = {
          friendRestaurantArray: [...selectedFriendRestaurantArray],
          currentFriend: selectedFriendUserName
        };
        return (
          firestore.update({
            collection: 'users',
            doc: currentUserId,
          },
            propertiesToUpdate
          )
        )
      }).then(toggleEating())
  };

  if (isLoaded(users)) {
    return (
      <React.Fragment>
        <div style={formPageStyles} className='ui centered grid'>
          <h1>Choose A Friend To Match With</h1>
        </div>
        <div style={formPageStyles} className='ui centered grid'>
          <FriendSelectionForm />
        </div>
        <div style={formPageStyles} className='ui centered grid'>
          <button className="ui submit button" onClick={handleClickingStart} type="submit">Start</button>
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

FriendHome.propTypes = {
  currentUser: PropTypes.object
}

export default withFirestore(FriendHome);
