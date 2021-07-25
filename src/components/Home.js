import React from 'react';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import Friends from './Friends';
import SignIn from './users/SignIn';
import { props } from 'bluebird';


const Home = () => {

  const auth = firebase.auth();
  // const eatingStatus = useSelector(state => state.account.eating)
  // console.log("EATING", eatingStatus)
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
    let currentlyVisibleState;
    if (!props.eating) {
      currentlyVisibleState = <Friends />
    } else {
      currentlyVisibleState = <RestaurantHome currentUser={currentUser} />
    }
    return (
      <>{currentlyVisibleState}</>
    )
  }
}

export default withFirestore(Home);