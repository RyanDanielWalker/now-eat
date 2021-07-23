import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignUp(props) {

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={props.onClickingSignUp}>
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

SignUp.propTypes = {
  onClickingSignUp: PropTypes.func
}

export default SignUp