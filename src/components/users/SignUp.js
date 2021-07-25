import React from 'react';
import firebase from 'firebase/app';
import { Link, useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreConnect, withFirestore } from 'react-redux-firebase';

const SignUp = () => {

  const firestore = useFirestore()
  const history = useHistory();

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const doSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
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
              currentFriend: null
            })
          )
        )
      }).catch(function (error) {
        alert(error.message);
      });
    history.push('/')
  }



  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email'
          required='required'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          required='required'
        />
        <input
          type='text'
          name='username'
          placeholder='username'
          required='required'
        />
        <button type='submit'>Sign up</button>
      </form>
      <p>Already have an account?</p>
      <p>Sign In <Link to={"/signin"}>here</Link></p>
    </div>
  )
}

export default withFirestore(SignUp);