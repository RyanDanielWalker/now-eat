import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import Friends from './Friends';
import SignIn from './users/SignIn';


const Home = () => {

  const auth = firebase.auth();
  const currentUser = auth.currentUser;
  console.log('HOME USER LOG', currentUser)
  const eatingStatus = useSelector(state => state.account.eating);

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
    let currentlyVisibleState;
    if (!eatingStatus) {
      currentlyVisibleState = <Friends currentUser={currentUser} />
    } else {
      currentlyVisibleState = <RestaurantHome currentUser={currentUser} />
    }
    return (
      <>{currentlyVisibleState}</>
    )
  }
}

export default withFirestore(Home);