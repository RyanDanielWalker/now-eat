import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function SignOut() {

  const history = useHistory();

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      // console.log("Successfully signed out!");
      history.push('/');
    }).catch(function (error) {
      // console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Are you sure you want to sign out?</h1>
      <button type="submit" onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  )
}

export default SignOut;
