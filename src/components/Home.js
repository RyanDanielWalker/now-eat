import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import SignIn from './users/SignIn';

function Home() {

  const history = useHistory();

  function handleClickingSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      // console.log("successfully signed in!");
      history.push('/');

    }).catch(function (error) {
      console.log(error.message);
    });
  }

  function handleClickingSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        // console.log("successfully signed up!");
        history.push('/signIn')
      }).catch(function (error) {
        // console.log(error.message);
        alert(error.message);
      });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      // console.log("Successfully signed out!");
      history.push('/');
    }).catch(function (error) {
      // console.log(error.message);
    });
  }

  function handleClickingSignOut() {
    firebase.auth().signOut().then(function () {
      // console.log("Successfully signed out!");
      history.push('/');
    }).catch(function (error) {
      // console.log(error.message);
    });
  }

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <SignIn
        onClickingSignIn={handleClickingSignIn} />
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
  }
  return (
    <RestaurantHome />
  )
}

export default withFirestore(Home);