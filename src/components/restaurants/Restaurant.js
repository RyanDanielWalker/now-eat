import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = (props) => {
  const { name, image, zip, rating, url, id, cardStyles } = props;
  return (
    <div style={cardStyles} className="ui centered card" key={id}>
      <div className="image">
        <img src={image} alt={`food from ${name}`} />
      </div >
      <div className="content">
        <div className="header">
          <a href={url} target="blank" rel="noopener noreferrer">{name}</a>
        </div>
        <div className="meta">{zip}</div>
        <div className="meta">
          <span className="rating">Rating: {rating}/5</span>
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
}

export default Restaurant;