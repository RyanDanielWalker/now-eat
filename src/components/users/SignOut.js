import React from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import * as a from './../../actions'
import { withFirestore, useFirestoreConnect, useFirestore } from 'react-redux-firebase';

const SignOut = () => {

  const formPageStyles = {
    marginTop: '10vh'
  }

  const history = useHistory();
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const currentUserId = firebase.auth().currentUser.uid

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const doSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const propertiesToUpdate = {
          matchedRestaurantArray: [],
          currentFriend: null,
          friendRestaurantArray: []
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
      .then(() => {
        const newCount = 0
        dispatch(a.userSignOut())
        dispatch(a.setCounter(newCount))
        history.push('/')
      })
      .catch((error) => {
        console.log("Signout Error", error.message);
      });
  }

  return (
    <React.Fragment>
      <div style={formPageStyles} className='ui centered grid'>
        <h1>Are you sure you want to sign out?</h1>
      </div>
      <div style={formPageStyles} className="ui centered grid">
        <button className='ui submit button' type="submit" onClick={doSignOut}>Sign Out</button>
      </div>
    </React.Fragment>
  )
}

export default withFirestore(SignOut);
