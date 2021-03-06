import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import { useDispatch } from 'react-redux';
import * as a from './../../actions'
import { withFirestore } from 'react-redux-firebase';

const SignIn = () => {
  const formPageStyles = {
    marginTop: '22px'
  }
  const dispatch = useDispatch();
  const history = useHistory();

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const username = result.user.displayName
        dispatch(a.userSignIn(username))
      })
      .then(() => {
        history.push('/');
      }).catch((error) => {
        console.log("Error", error.message);
      });
  }

  return (
    <React.Fragment>
      <div style={{ marginTop: '75px' }} className='ui centered grid'>
        <h1 style={{
          textDecoration: 'underline',
          textDecorationThickness: '3px',
          textDecorationColor: '#222629'
        }}>Sign In</h1>
      </ div>
      <div style={formPageStyles} className='ui centered grid'>
        <form className='ui large form' onSubmit={doSignIn}>
          <div className='two fields'>
            <div className='field'>
              <input
                type='text'
                name='signInEmail'
                placeholder='email'
                required='required'
              />
            </div>
            <div className='field'>
              <input
                type='password'
                name='signInPassword'
                placeholder='password'
                required='required'
              />
            </div>
          </div>
          <button style={{ backgroundColor: '#CD4834', color: '#CEE6AD' }} type='submit' className='ui submit button'>Sign In</button>
        </form>
      </div>
      <div style={formPageStyles} className='ui centered grid'>
        <p style={{ color: 'grey' }}>Don't have an account? Register <Link style={{ color: '#CD4834' }} to={`/signup`}>here</Link></p>
      </div>
    </React.Fragment >
  )
};

export default withFirestore(SignIn);