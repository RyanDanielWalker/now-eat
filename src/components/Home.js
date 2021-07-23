import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import SignIn from './users/SignIn';

function Home() {

  const auth = firebase.auth();
  console.log(auth.currentUser)

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <SignIn />
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
  }
  return (
    <RestaurantHome />
  )
}

export default withFirestore(Home);