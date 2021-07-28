import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import * as a from '../../actions';

const FriendSelectionForm = () => {

  const users = useSelector(state => state.firestore.ordered.users);
  const value = useSelector(state => state.account.value)
  const dispatch = useDispatch()

  const handleValueChange = (event) => {
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
      <form>
        <div style={{ width: '300px', textAlign: 'Center' }} className="ui form">
          <div className="field">
            <select value={value} placeholder="Select Friend" onChange={handleValueChange} className="ui search dropdown">
              <option value="">Friends</option>
              {userList}
            </select>
          </div>
        </div>
      </form>
    )
  }
}

export default withFirestore(FriendSelectionForm);