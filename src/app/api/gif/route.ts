import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { GiphyResponse } from '@shared/types/api.types';

const giphyApiKey = process.env.GIPHY_API_KEY;

export const runtime = 'edge';

export const GET = async (req: NextRequest) => {
  try {
    const weekday = req.nextUrl.searchParams.get('weekday') as string;
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}&rating=G&tag=its-${weekday}`;

    const response = await fetch(apiUrl, { method: 'GET' });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Could not find GIF' },
        { status: 404 },
      );
    }

    const data = (await response.json()) as GiphyResponse;

    const { images, url } = data.data;

    return NextResponse.json({ images, url }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 },
    );
  }
};
