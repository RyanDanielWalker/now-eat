import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import * as a from './../actions';
// import PropTypes from 'prop-types';

const FriendSelectionForm = (props) => {

  const users = useSelector(state => state.firestore.ordered.users);
  const dispatch = useDispatch()
  let value = useSelector(state => state.account.value)

  const handleValueChange = (event) => {
    console.log("HANDLECHANGE EVENT LOG", event)
    const newFormValue = { value: event.target.value }
    dispatch(a.handleFormValueChange(newFormValue))
  }

  if (isLoaded(users)) {
    const userList = users.map((user) => {
      const { username, id } = user;
      return (
        <option key={id} name={id} value={id}>{username}</option>
      )
    })
    return (
      <form onSubmit={props.handleSubmittingSelectFriend}>
        <div className="ui form">
          <div className="field">
            <label>Select Friend</label>
            <select value={value} placeholder="Select Friend" onChange={handleValueChange} className="ui search dropdown">
              <option value="">Choose a Friend</option>
              {userList}
            </select>
          </div>
        </div>
      </form>
    )
  }
}

// FriendSelectionForm.propTypes = {
//   handleSubmittingSelectFriend: PropTypes.func
// }

export default withFirestore(FriendSelectionForm);