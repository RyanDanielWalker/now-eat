import React from 'react';
import firebase from 'firebase/app';
import { Link, useHistory } from 'react-router-dom';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
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
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return (
          firestore.collection('users').doc(cred.user.uid).set({
            likedRestaurants: []
          })
        )
        // console.log("successfully signed up!");
      }).catch(function (error) {
        // console.log(error.message);
        alert(error.message);
      });
    history.push('/signIn')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email'
        />
        <input
          type='password'
          name='password'
          placeholder='password'
        />
        <button type='submit'>Sign up</button>
      </form>
      <p>Already have an account?</p>
      <p>Sign In <Link to={"/signin"}>here</Link></p>
    </div>
  )
}

export default SignUp