import axios from 'axios';
import { isEmpty } from 'lodash';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';

interface GifProps {
  weekday?: string;
}

interface GiphyImage {
  url: string;
  width: number;
  height: number;
}

const fallbackImage: GiphyImage = {
  url: 'https://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif',
  width: 351,
  height: 233
};

export const Gif: FC<GifProps> = ({ weekday = 'Unknown day' }) => {
  const [giphyImage, setGiphyImage] = useState<GiphyImage | null>(null);
  const [giphyUrl, setGiphyUrl] = useState('#');

  const currentImage = useMemo((): GiphyImage => {
    if (isEmpty(giphyImage)) {
      return fallbackImage;
    }

    return giphyImage;
  }, [giphyImage]);

  useEffect(() => {
    axios.get('/api/gif', { params: { weekday } }).then((response) => {
      const { images, url } = response.data;
      const image = images.downsized;

      setGiphyImage(image);
      setGiphyUrl(url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="iff-gif-container">
      <a href={giphyUrl} target="_blank" rel="noopener noreferrer">
        <img className="iff-gif" src={currentImage.url} alt="Gif" title="Gif" />
      </a>
      <br />
      <Image
        className="iff-attribution"
        src="/powered-by.png"
        alt="Powered by GIPHY"
        title="Powered by GIPHY"
        width={100}
        height={27}
      />
    </div>
  );
};
