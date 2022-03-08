import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { useMount } from '../hook/effect.hook';

import appConfig from '../config/app.config';

import poweredByImgUrl from '../img/powered-by.png';

const fallbackGifUrl = 'https://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif';

const Gif = ({ weekday }) => {
  const [gifUrl, setGifUrl] = useState(fallbackGifUrl);
  const [giphyUrl, setGiphyUrl] = useState('#');

  const apiUrl = useMemo(
    () =>
      `https://api.giphy.com/v1/gifs/random?api_key=${appConfig.giphyApiKey}&rating=G&tag=${weekday}`,
    [weekday]
  );

  useMount(() => {
    axios.get(apiUrl).then((response) => {
      const image = response.data.data.images.original.url;

      setGifUrl(image.replace(/^http:\/\//iu, 'https://'));
      setGiphyUrl(response.data.data.url.replace(/^http:\/\//iu, 'https://'));
    });
  });

  return (
    <div className="iff-gif-container">
      <a href={giphyUrl} target="_blank" rel="noopener noreferrer">
        <img className="iff-gif" src={gifUrl} alt="Gif" title="Gif" />
      </a>
      <br />
      <img
        className="iff-attribution"
        src={poweredByImgUrl}
        alt="Powered by GIPHY"
        title="Powered by GIPHY"
      />
    </div>
  );
};

Gif.propTypes = {
  weekday: PropTypes.string
};

Gif.defaultProps = {
  weekday: 'Unknown day'
};

export default Gif;
