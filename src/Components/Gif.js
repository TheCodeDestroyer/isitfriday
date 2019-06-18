import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Gif.css';

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: props.weekday,
      gifUrl: 'https://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif',
      giphyUrl: '#'
    };
  }

  componentDidMount() {
    axios.get(`https://api.thecodedestroyer.com/api/giphy/isitfriday?dayOfWeek=${this.state.dayOfWeek}`)
      .then((response) => {
        this.setState({
          gifUrl: response.data.data.image_url.replace(/^http:\/\//i, 'https://'),
          giphyUrl: response.data.data.url.replace(/^http:\/\//i, 'https://')
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.gifUrl !== nextState.gifUrl ||
      this.state.giphyUrl !== nextState.giphyUrl;
  }

  render() {
    return (
      <div className="iff-gif-container">
        <a href={this.state.giphyUrl} target="_blank" rel="noopener noreferrer">
          <img className="iff-gif" src={this.state.gifUrl} alt="Gif" title="Gif"/>
        </a>
        <br/>
        <img
          className="iff-attribution"
          src="/Poweredby_100px-Black_VertLogo.png"
          alt="Powered by GIPHY"
          title="Powered by GIPHY"
        />
      </div>
    );
  }
}

Gif.propTypes = { weekday: PropTypes.string };
Gif.defaultProps = { weekday: 'Unknown day' };

export default Gif;
