import React from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import * as a from './../../actions'
import { withFirestore } from 'react-redux-firebase';

const SignOut = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const doSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch(a.userSignOut())
        history.push('/');
      }).catch(function (error) {
        console.log("Signout Error", error.message);
      });
  }

  return (
    <React.Fragment>
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit" onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  )
}

export default withFirestore(SignOut);
