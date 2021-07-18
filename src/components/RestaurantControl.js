import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import * as a from './../actions';
// import { withFirestore, isLoaded } from 'react-redux-firebase';
import { makeApiCall } from '../actions';
import { Carousel } from 'react-bootstrap';



class RestaurantControl extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall())
  }

  render() {
    // let visibleState = null;
    const { error, isLoading, headlines } = this.props;
    console.log(headlines);

    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <Carousel>

          {headlines.headlines.map((headline, index) => {
            return <Carousel.Item key={index}>
              <Carousel.Caption>
                <h3>{headline.title}</h3>
                <p>{headline.abstract}</p>
              </Carousel.Caption>
            </Carousel.Item>
          }
          )}
        </Carousel>
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
