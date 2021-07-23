import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from 'react-router';

function SignUp(props) {

  const history = useHistory();

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onClickingSignUp}>
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
  onClickingSignUp: propTypes.func
}

export default SignUp