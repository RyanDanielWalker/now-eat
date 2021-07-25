import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import Friends from './Friends';
import SignIn from './users/SignIn';


const Home = () => {

  const auth = firebase.auth();
  const eatingStatus = useSelector(state => state.eating.nowEating)
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
    if (!eatingStatus) {
      return (
        <Friends />
      )
    } return (
      <RestaurantHome currentUser={currentUser} />
    )
  }
}

export default withFirestore(Home);