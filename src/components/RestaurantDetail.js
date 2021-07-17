import React from "react";
import PropTypes from "prop-types";

function RestaurantDetail(props) {
  const { restaurant, onClickingYes, onClickingNo } = props;

  return (
    <React.Fragment>
      <h1>{restaurant.name}</h1>
      <h3>{restaurant.rating}</h3>
      <h3>{restaurant.price}</h3>
      <h3>{restaurant.image}</h3>
      <button onClick={props.onClickingYes}>Yes</button>
      <button onClick={props.onClickingNo}>No</button>
      <hr />
    </React.Fragment>
  );
}

RestaurantDetail.propTypes = {
  restaurant: PropTypes.object,
  onClickingYes: PropTypes.func,
  onClickingNo: PropTypes.func
};

export default RestaurantDetail;