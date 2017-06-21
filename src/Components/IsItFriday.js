import React from 'react';

const IsItFriday = (props) => (
    <div className="iif-answer">
        <h1>{props.friday ? 'Yes!' : 'No'}</h1>
        <h2>{`It's ${props.weekday}...`}</h2>
    </div>
);

export default IsItFriday;
