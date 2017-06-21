import React from 'react';
import './App.css';
import IsItFriday from './IsItFriday';
import Gif from './Gif';
import moment from 'moment';

class App extends React.Component {
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
            <div className="App">
                <div className="App-header">
                    <h1>{'Is it friday?'}</h1>
                </div>
                <IsItFriday friday={this.isItFriday} weekday={this.dayOfWeek}/>
                <Gif weekday={this.dayOfWeek}/>
            </div>
        );
    }
}

export default App;
