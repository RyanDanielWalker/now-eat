import React from 'react';
import PropTypes from 'prop-types';

const Restaurant = (props) => {
  return (
    <div className="ui cards" key={props.id}>
      <div style={props.cardStyles} className="card" >
        <div className="image">
          <img src={props.image} alt={`food from ${props.name}`} />
        </div >
        <div className="content">
          <div className="header">
            <a href={props.url} target="blank" rel="noopener noreferrer">{props.name}</a>
          </div>
          <div className="meta">
            <span className="rating">Rating: {props.rating}/5</span>
          </div>
          <div className="meta">{props.zip}</div>
        </div>
      </div>
      <div style={props.buttonStyles} className="ui large buttons">
        <button onClick={props.clickButton} className="ui button"><i className="thumbs up outline icon"></i>Yes</button>
        {/* <div className="or"></div> */}
        <button onClick={props.clickButton} className="ui button"><i className="thumbs down outline icon"></i>No</button>
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
  clickButton: PropTypes.func
}

export default Restaurant;