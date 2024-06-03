import Head from 'next/head';
import type { FC } from 'react';

export const HeadMeta: FC = () => (
  <Head>
    <title>Is It Friday? | Find Out Now & Enjoy Daily Memes!</title>
    <meta
      name="description"
      content="Isitfriday.eu tells you whether it's Friday or not in a flash! For every other day, get a smile with a daily meme gif tailored to the day. Check now and start your day with a dose of fun!"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />

    <link rel="manifest" href="/manifest.json" />
  </Head>
);
