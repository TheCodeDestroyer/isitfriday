import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Gif.css';

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUrl: 'https://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif',
      giphyUrl: '#'
    };
  }

  componentDidMount() {
    const { weekday } = this.props;

    axios
      .get(
        `https://api.thecodedestroyer.com/api/giphy/isitfriday?dayOfWeek=${weekday}`
      )
      .then((response) => {
        const image = response.data.data.images.original.url;

        this.setState({
          gifUrl: image.replace(/^http:\/\//iu, 'https://'),
          giphyUrl: response.data.data.url.replace(/^http:\/\//iu, 'https://')
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { gifUrl, giphyUrl } = this.state;

    return gifUrl !== nextState.gifUrl || giphyUrl !== nextState.giphyUrl;
  }

  render() {
    const { gifUrl, giphyUrl } = this.state;

    return (
      <div className="iff-gif-container">
        <a href={giphyUrl} target="_blank" rel="noopener noreferrer">
          <img className="iff-gif" src={gifUrl} alt="Gif" title="Gif" />
        </a>
        <br />
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
