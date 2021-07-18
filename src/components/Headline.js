import React from 'react';
import PropTypes from 'prop-types';

function Headline(props) {

  return (
    <React.Fragment>
      <h3>{props.title}</h3>
      <h5>{props.abstract}</h5>
      <h5>{props.section}</h5>
      <h5>{props.key}</h5>
    </React.Fragment>
  )
}

Headline.propTypes = {
  title: PropTypes.string,
  abstract: PropTypes.string,
  section: PropTypes.string,
  key: PropTypes.string,
  // whenHeadlineClicked: PropTypes.func
}

export default Headline;