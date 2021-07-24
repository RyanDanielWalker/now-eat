import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import Friends from './Friends';
import SignIn from './users/SignIn';


const Home = () => {

  const auth = firebase.auth();
  const currentUser = auth.currentUser

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
    return (
      // <RestaurantHome currentUser={currentUser} />
      <Friends />
    )
  }
}

export default withFirestore(Home);