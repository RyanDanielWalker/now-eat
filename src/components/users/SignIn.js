import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SignIn(props) {

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={props.onClickingSignIn}>
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

SignIn.propTypes = {
  onClickingSignIn: PropTypes.func
}

export default SignIn