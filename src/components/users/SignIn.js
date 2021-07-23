import React from 'react';

function SignIn() {

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

      <h1>Sign Out</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment >
  )
}

export default SignIn