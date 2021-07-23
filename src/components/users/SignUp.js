import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

function SignUp() {

  const history = useHistory();

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        // console.log("successfully signed up!");
        history.push('/signIn')
      }).catch(function (error) {
        // console.log(error.message);
        alert(error.message);
      });
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