import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  marginBottom: '5vw'
}

const RestaurantButtons = (props) => {
  const { onClickingYes, increaseCounter } = props;
  return (
    <div style={buttonStyles} className="ui large buttons">
      <button onClick={onClickingYes} className="ui button">
        <i className="thumbs up outline icon"></i>
        Yes
      </button>
      <div className="or"></div>
      <button onClick={increaseCounter} className="ui button">
        <i className="thumbs down outline icon"></i>
        No
      </button>
    </div>
  )
}

RestaurantButtons.propTypes = {
  onClickingYes: PropTypes.func,
  increaseCounter: PropTypes.func
}

export default RestaurantButtons;