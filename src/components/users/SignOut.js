import React from 'react';
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import * as a from './../../actions'

const SignOut = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const doSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        const newCount = 0
        dispatch(a.setCounter(newCount))
        // console.log("Successfully signed out!");
      }).catch(function (error) {
        console.log("Signout Error", error.message);
      });
    history.push('/');
  }

  return (
    <React.Fragment>
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit" onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  )
}

export default SignOut;
