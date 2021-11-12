import React from 'react';
import PropTypes from 'prop-types';

const IsItFriday = ({ friday, weekday }) => (
  <div className="iif-answer">
    <h1>{friday ? 'Yes!' : 'No'}</h1>
    {!friday && <h2>{`It's ${weekday}...`}</h2>}
  </div>
);

IsItFriday.propTypes = {
  friday: PropTypes.bool,
  weekday: PropTypes.string.isRequired
};

IsItFriday.defaultProps = { friday: false };

export default IsItFriday;
