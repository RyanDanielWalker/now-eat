import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';


function SignIn() {

  const history = useHistory();

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      // console.log("successfully signed in!");
      history.push('/');
    }).catch(function (error) {
      console.log(error.message);
    });
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

      {/* <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button> */}
    </React.Fragment >
  )
}

export default SignIn