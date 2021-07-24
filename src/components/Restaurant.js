import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = (props) => {
  return (
    <div style={props.cardStyles} className="ui centered card" key={props.id}>
      <div className="image">
        <img src={props.image} alt={`food from ${props.name}`} />
      </div >
      <div className="content">
        <div className="header">
          <a href={props.url} target="blank" rel="noopener noreferrer">{props.name}</a>
        </div>
        <div className="meta">{props.zip}</div>
        <div className="meta">
          <span className="rating">Rating: {props.rating}/5</span>
        </div>
      </div>
    </div>
  )
}

Restaurant.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  zip: PropTypes.string,
  rating: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  cardStyles: PropTypes.object,
  buttonStyles: PropTypes.object,
}

export default Restaurant;