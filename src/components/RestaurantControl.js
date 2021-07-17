import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import * as a from './actions';
import { withFirestore, isLoaded } from 'react-redux-firebase'
// import { Link } from "react-router-dom";
import { makeApiCall } from './../components/actions'

class RestaurantControl extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }

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
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      const { error, isLoading /*masterRestaurantList, selectedRestaurant*/ } = this.props
      if (error) {
        return <React.Fragment>Error: {error.message}</React.Fragment>;
      } else if (isLoading) {
        return <React.Fragment>Loading...</React.Fragment>;
      } else {
        return (
          <React.Fragment>
            <p>cabbage</p>
            {/* <RestaurantDetail /> */}
          </React.Fragment>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    masterRestaurantList: state.masterRestaurantList,
    selectedRestaurant: state.selectedRestaurant,
    isLoading: state.isLoading,
    error: state.error
  }
}

RestaurantControl = connect(mapStateToProps)(RestaurantControl);

export default withFirestore(RestaurantControl);
