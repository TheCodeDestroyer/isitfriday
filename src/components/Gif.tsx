'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FC } from 'react';

import { isEmpty } from 'lodash';
import Image from 'next/image';

import type { GiphyImage, GiphyResponse } from '@shared/types/api.types';

interface GifProps {
  weekday?: string;
}

const fallbackImage: GiphyImage = {
  url: 'https://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif',
  width: 351,
  height: 233,
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

  const fetchGif = useCallback(async () => {
    const searchParams = new URLSearchParams({ weekday });
    try {
      const response = await fetch(`/api/gif?${searchParams}`);
      const { images, url } = (await response.json()) as GiphyResponse['data'];

      setGiphyImage(images.downsized);
      setGiphyUrl(url);
    } catch {
      setGiphyImage(fallbackImage);
      setGiphyUrl('#');
    }
  }, [weekday]);

  useEffect(() => {
    if (isEmpty(giphyImage) || giphyUrl === '#') {
      void fetchGif();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center">
      <a href={giphyUrl} target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="iff-gif" src={currentImage.url} alt="Gif" title="Gif" />
      </a>
      <Image
        className="mt-1"
        src="/powered-by.png"
        alt="Powered by GIPHY"
        title="Powered by GIPHY"
        width={100}
        height={27}
      />
    </div>
  );
};
