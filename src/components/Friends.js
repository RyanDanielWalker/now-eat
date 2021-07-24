import React from 'react';
import { useSelector } from 'react-redux';
import { withFirestore, useFirestoreConnect, isLoaded, useFirestore } from 'react-redux-firebase';

const Friends = () => {
  //choose from list which friend you would like to see matches for
  //set state value of pairedFriend to user chosen 

  // const firestore = useFirestore()
  // const dispatch = useDispatch()
  useFirestoreConnect([
    { collection: 'restaurants' },
    { collection: 'users' }
  ]);

  const users = useSelector(state => state.firestore.ordered.users);
  console.log("Users", users)
  if (isLoaded(users)) {
    const userList = users.map((user) => {
      const { username, id } = user;
      return (
        <option key={id} value={username}>{username}</option>
      )
    })
    return (
      <React.Fragment>
        <div className="ui form">
          <div className="field">
            <label>Select Friend</label>
            <select className="ui search dropdown">
              <option value="">Select Friend</option>
              {userList}
            </select>
          </div>
        </div>
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
