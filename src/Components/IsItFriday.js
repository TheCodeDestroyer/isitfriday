import React from 'react';
import PropTypes from 'prop-types';

const IsItFriday = (props) => (
  <div className="iif-answer">
    <h1>{props.friday ? 'Yes!' : 'No'}</h1>
    {!props.friday &&
    <h2>{`It's ${props.weekday}...`}</h2>
    }
  </div>
);

IsItFriday.propTypes = {
  friday: PropTypes.bool,
  weekday: PropTypes.string.isRequired
};

IsItFriday.defaultProps = { friday: false };

export default IsItFriday;
