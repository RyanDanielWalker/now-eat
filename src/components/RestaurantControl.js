import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase';
import { makeApiCall } from '../actions';

class RestaurantControl extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }

  //////////////////////////////////////////////
  /////////////// Current State ////////////////
  //////////////////////////////////////////////
  ///////////     State = {     ////////////////
  /////////// isLoading: false, ////////////////
  /////////// headlines: [
  // {"headline obj"}, //
  // {"headline obj"}, //
  // {"headline obj"}, //
  // {"headline obj"}, //
  // ],                //
  /////////// error: null,      ////////////////
  /////////// currentHeadline: null ///////////
  //////////////////////////////////////////////

  handleChangingCurrentHeadline() {
    const { dispatch } = this.props
    const currentHeadline = this.props.headlines.headlines[0]
    console.log('currentHeadLine =', currentHeadline)
    const action = a.makeCurrentHeadline(currentHeadline)
    dispatch(action)
  }

  render() {
    this.handleChangingCurrentHeadline()
    const { error, isLoading, headlines, currentHeadline } = this.props;
    console.log(headlines);
    console.log(headlines.headlines[0]);
    console.log("Display current Headline = ", currentHeadline)

    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Bros</h1>
        </React.Fragment>
      );
    }
  }
}

RestaurantControl.propTypes = {
  headlines: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  currentHeadline: PropTypes.object
}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error,
    currentHeadline: state.currentHeadline
  }
}

export default connect(mapStateToProps)(RestaurantControl);


// RestaurantControl = connect(mapStateToProps)(RestaurantControl);
// export default withFirestore(RestaurantControl);













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
