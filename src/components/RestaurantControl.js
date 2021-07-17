import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import * as a from './../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase';
import { makeApiCall } from '../actions';

class RestaurantControl extends React.Component {
  /////////////////////////////////////////////////
  ///////////// Like/Dislike Functions ///////////
  ///////////////////////////////////////////////

  // handleClickingYes = (id) => {
  //   //add state.restaurant{id} to user list
  //   //const currentRestaurant = this.props.masterRestaurantList[id]
  //   //state.currentRestaurant = state.restaurant{id++}
  //   //selectedRestaurant: currentRestaurant
  // }

  // handleClickingNo = () => {
  //   //change selected restaurant to next restaurant
  // }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }

  render() {
    //////////////////////////////////////////////
    ////////// User login conditionals //////////
    ////////////////////////////////////////////

    // const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     <React.Fragment>
    //       <h1>Loading...</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <React.Fragment>
    //       <h1>You must be signed in to access the application, ya dingus.</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {

    const { error, isLoading, headlines } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>

        </React.Fragment>
      );
    }
  }
}

// We'll also need to add mapStateToProps() as well.

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error,
    selectedHeadline: state.selectedHeadline
  }
}

export default connect(mapStateToProps)(RestaurantControl);


// RestaurantControl = connect(mapStateToProps)(RestaurantControl);
// export default withFirestore(RestaurantControl);
