import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Gif.css';

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: props.weekday,
      gifUrl: 'http://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif'
    };
  }

  componentDidMount() {
    axios.get(`https://api.thecodedestroyer.com/api/giphy/isitfriday?dayOfWeek=${this.state.dayOfWeek}`)
      .then((response) => {
        this.setState({ gifUrl: response.data.data.image_url });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.gifUrl !== nextState.gifUrl;
  }

  render() {
    return (
      <div className="iff-gif-container">
        <img className="iff-gif" src={this.state.gifUrl} alt="Gif" title="Gif"/>
        <br/>
        <img className="iff-attribution"
             src="/Poweredby_100px-Black_VertLogo.png"
             alt="Powered by GIPHY"
             title="Powered by GIPHY"/>
      </div>
    );
  }
}

Gif.propTypes = { weekday: PropTypes.string };
Gif.defaultProps = { weekday: 'Unknown day' };

export default Gif;
