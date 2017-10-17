import React from 'react';
import './App.css';
import IsItFriday from './IsItFriday';
import Gif from './Gif';
import Footer from './Footer';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    const currentDate = moment();
    this.state = {
      currentDate: moment(),
      isItFriday: currentDate.isoWeekday() === 5,
      dayOfWeek: currentDate.format('dddd'),
      year: currentDate.format('YYYY'),
    };
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
        <IsItFriday friday={this.state.isItFriday} weekday={this.state.dayOfWeek}/>
        <Gif weekday={this.state.dayOfWeek}/>
        <Footer year={this.state.year}/>
      </div>
    );
  }
}

export default App;
