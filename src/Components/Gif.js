import React from 'react';
import PropTypes from 'prop-types';

class Gif extends React.Component {
    constructor(props) {
        super(props);
        this.dayOfWeek = props.weekday;
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="iff-gif">
                {`GIF ${this.dayOfWeek}`}
            </div>
        );
    }
}

Gif.propTypes = { weekday: PropTypes.string };
Gif.defaultProps = { weekday: 'Unknown day' };

export default Gif;
