import React from 'react';
import PropTypes from 'prop-types';
import Headline from './Headline';

function HeadlineList(props) {
  return (
    <React.Fragment>
      {Object.values(props.headlines).map((headline) => {
        return <Headline
          title={headline.title}
          abstract={headline.abstract}
          section={headline.section}
          key={headline.key}
        />
      })}
    </React.Fragment>
  );
}

HeadlineList.propTypes = {
  headlines: PropTypes.object
}

export default HeadlineList