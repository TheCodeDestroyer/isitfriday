import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './Footer.css';

const Footer = (props) => (
    <div className="iif-footer">
        <p>{`Copyrights © ${props.year}  `}
            <a target="_blank" rel="noreferrer noopener" href="https://thecodedestroyer.com">
                {'TheCodeDestroyer'}
            </a>
        </p>
    </div>
);

Footer.propTypes = { year: PropTypes.string };
Footer.defaultProps = { year: moment().format('YYYY') };

export default Footer;
