import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Gif.css';

class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.dayOfWeek = props.weekday;
    this.gifUrl = 'http://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif';
  }

  componentDidMount() {
    axios.get(`https://api.thecodedestroyer.com/api/giphy/isitfriday?dayOfWeek=${this.dayOfWeek}`)
      .then((response) => {
        this.gifUrl = response.data.data.image_url;
        setTimeout(() => {
          this.forceUpdate();
        }, 500);
      });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="iff-gif-container">
        <img className="iff-gif" src={this.gifUrl} alt="Gif" title="Gif"/>
        <br/>
        <img className="iff-attribution" src="/Poweredby_100px-Black_VertLogo.png" alt="Powered by GIPHY" title="Powered by GIPHY"/>
      </div>
    );
  }
}

Gif.propTypes = { weekday: PropTypes.string };
Gif.defaultProps = { weekday: 'Unknown day' };

export default Gif;
