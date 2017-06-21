import React from 'react';
import moment from 'moment';

class IsItFriday extends React.Component {
    constructor(props) {
        super(props);
        this.currentDate = moment();
        this.isItFriday = this.currentDate.isoWeekday() === 5;
        this.dayOfWeek = this.currentDate.format('dddd');
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="iif-answer">
                <h1>{this.isItFriday ? 'Yes!' : 'No'}</h1>
                <h2>{`It's ${this.dayOfWeek}...`}</h2>
            </div>
        );
    }
}

export default IsItFriday;
