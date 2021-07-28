import React from 'react';
import firebase from 'firebase/app';
import { Link, useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreConnect, withFirestore } from 'react-redux-firebase';
import * as a from './../../actions'
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const formPageStyles = {
    marginTop: '22px'
  }

  const firestore = useFirestore()
  const history = useHistory();
  const dispatch = useDispatch();


  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    dispatch(a.userSignIn(username))
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return (
          cred.user.updateProfile({
            displayName: username
          }).then(firestore
            .collection('users')
            .doc(cred.user.uid)
            .set({
              username: username,
              likedRestaurants: [],
              currentFriend: null,
              matchedRestaurantArray: [],
              friendRestaurantArray: []
            })
          )
        )
      }).catch((error) => {
        alert(error.message);
      }).then(history.push('/'))
  }

  return (
    <React.Fragment>
      <div style={{ marginTop: '65px' }} className='ui centered grid'>
        <h1>Sign Up</h1>
      </ div>
      <div style={formPageStyles} className='ui centered grid'>
        <form className='ui large form' onSubmit={doSignUp}>
          <div className='three fields'>
            <div className='field'>
              <input
                type='text'
                name='email'
                placeholder='email'
                required='required'
              />
            </div>
            <div className='field'>
              <input
                type='password'
                name='password'
                placeholder='password'
                required='required'
              />
            </div>
            <div className='field'>
              <input
                type='text'
                name='username'
                placeholder='username'
                required='required'
              />
            </div>
          </div>
          <button type='submit' className='ui submit button'>Sign up</button>
        </form>
      </div>
      <div style={formPageStyles} className='ui centered grid'>
        <p style={{ color: 'grey' }}>Already have an account? Sign In <Link to={"/signin"}>Here</Link></p>
      </div >
    </React.Fragment>
  )
}

export default withFirestore(SignUp);