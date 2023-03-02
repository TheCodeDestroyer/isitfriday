import axios from 'axios';
import { isEmpty } from 'lodash';
import type { NextApiRequest, NextApiResponse } from 'next';

import { asyncPromiseWrapper } from '../../utils/common.utils';

const giphyApiKey = process.env.GIPHY_API_KEY;

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { weekday } = req.query;
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&rating=G&tag=${weekday}`;
  const response = await asyncPromiseWrapper(axios.get(apiUrl));

  if (isEmpty(response)) {
    res.status(400).json({});

    return;
  }

  const { images, url } = response.data.data;

  res.status(200).json({ images, url });
};

export default handler;
