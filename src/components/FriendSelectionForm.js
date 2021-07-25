import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import * as a from './../actions';
import PropTypes from 'prop-types';

const FriendSelectionForm = (props) => {
  const users = useSelector(state => state.firestore.ordered.users);
  const dispatch = useDispatch()
  let value = useSelector(state => state.value)
  const handleValueChange = (event) => {
    const newFormValue = { value: event.target.value }
    dispatch(a.handleFormValueChange(newFormValue))
  }
  if (isLoaded(users)) {
    const userList = users.map((user) => {
      console.log("Users", users)
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
            <select value={value} onChange={handleValueChange} className="ui search dropdown">
              {userList}
            </select>
          </div>
        </div>
        <input type='submit' input />
      </form>
    )
  }
}

FriendSelectionForm.propTypes = {
  handleSubmittingSelectFriend: PropTypes.func
}

export default withFirestore(FriendSelectionForm);