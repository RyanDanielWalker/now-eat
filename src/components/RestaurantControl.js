import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'

class RestaurantControl extends React.Component {

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the application, ya dingus.</h1>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedRestaurant: state.selectedRestaurant
  }
}

RestaurantControl = connect(mapStateToProps)(RestaurantControl);

export default withFirestore(RestaurantControl);
