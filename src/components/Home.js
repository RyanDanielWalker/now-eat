import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app';
import RestaurantHome from './RestaurantHome';
import SignIn from './users/SignIn';


const Home = () => {

  const auth = firebase.auth();
  const user = useSelector(state => state.firebase)
  console.log(auth.currentUser)
  console.log(user)


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