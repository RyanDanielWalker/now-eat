import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = (props) => {
  const { name, image, address, rating, url, id, cardStyles } = props;
  return (
    <div style={cardStyles} className="ui centered card" key={id}>
      <div>
        <h5 style={{
          textDecoration: 'underline',
          textDecorationThickness: '3px',
          textDecorationColor: '#222629',
          textEmphasis: 'bold',
          marginBottom: '8px'
        }}>Do you want to eat here?</h5>
      </div>
      <div className="image">
        <img src={image} alt={`food from ${name}`} />
      </div >
      <div className="content">
        <div className="header">
          <a style={{ color: '#CD4834' }} href={url} target="blank" rel="noopener noreferrer">{name}</a>
        </div>
        <div className="meta">{address}</div>
        <div className="meta">
          <span className="rating">Rating: {rating}/5 <i class="star outline icon"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

Restaurant.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  address: PropTypes.string,
  rating: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.string,
  cardStyles: PropTypes.object
}

export default Restaurant;