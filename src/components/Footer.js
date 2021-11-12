import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const style = { color: '#666' };

const Footer = ({ year }) => (
  <div className="iif-footer">
    <p>
      {`Copyrights © 2017 - ${year}  `}
      <a
        style={style}
        target="_blank"
        rel="noreferrer noopener"
        href="https://thecodedestroyer.com"
      >
        {'TheCodeDestroyer'}
      </a>
    </p>
  </div>
);

Footer.propTypes = { year: PropTypes.string };
Footer.defaultProps = { year: moment().format('YYYY') };

export default Footer;
