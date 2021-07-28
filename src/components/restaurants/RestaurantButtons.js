import React from 'react';
import PropTypes from 'prop-types';

const buttonStyles = {
  marginBottom: '5vw'
}

const RestaurantButtons = (props) => {
  const { onClickingYes, increaseCounter } = props;
  return (
    <div style={buttonStyles} className="ui large buttons">
      <button style={{ backgroundColor: '#7EB04F', color: '#CEE6AD' }} onClick={onClickingYes} className="ui button">
        <i className="thumbs up outline icon"></i>
        Yes
      </button>
      <div className="or"></div>
      <button style={{ backgroundColor: '#CD4834', color: '#CEE6AD' }} onClick={increaseCounter} className="ui button">
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