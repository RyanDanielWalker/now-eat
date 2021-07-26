import React from 'react';
import PropTypes from 'prop-types';

const Matches = (props) => {
  const { id, name, url } = props;
  return (
    <div className="ui centered card" key={id}>
      <div className="content">
        <div className="header">
          <a href={url} target="blank" rel="noopener noreferrer">{name}</a>
        </div>
      </div>
    </div>
  )
}

Matches.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
}

export default Matches;