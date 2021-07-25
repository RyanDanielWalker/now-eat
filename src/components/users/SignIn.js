import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import * as a from './../../actions'

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(a.userSignIn(email))
      }).catch((error) => {
        console.log("Error", error.message);
      });
    history.push('/');
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signInEmail'
          placeholder='email'
        />
        <input
          type='password'
          name='signInPassword'
          placeholder='password'
        />
        <button type='submit'>Sign In</button>
      </form>

      <p>Don't have an account?</p>
      <p>Create one <Link to={`/signup`}>here</Link></p>
    </React.Fragment >
  )
};

export default SignIn;