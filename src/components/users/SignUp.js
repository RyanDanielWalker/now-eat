import React from 'react';
import PropTypes from 'prop-types';

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
    </div>
  )
}

SignUp.propTypes = {
  onClickingSignUp: PropTypes.func
}

export default SignUp