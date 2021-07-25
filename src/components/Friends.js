import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';
// import { useHistory } from 'react-router';

const Friends = () => {
  //choose from list which friend you would like to see matches for
  //set state value of pairedFriend to user chosen 

  // const firestore = useFirestore()
  const dispatch = useDispatch()

  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const users = useSelector(state => state.firestore.ordered.users);
  if (isLoaded(users)) {
    const userList = users.map((user) => {
      console.log("Users", users)
      const { username, id } = user;
      return (
        <option key={id} value={username}>{username}</option>
      )
    })

    const toggleEating = () => {
      dispatch(a.nowEating())
    }

    return (
      <React.Fragment>
        <h1>Choose A Friend To Match With</h1>
        <form>
          <div className="ui form">
            <div className="field">
              <label>Select Friend</label>
              <select className="ui search dropdown">
                <option value="">Select Friend</option>
                {userList}
              </select>
            </div>
          </div>
        </form>
        <button onClick={toggleEating} type="submit">Start</button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}





export default Friends;
