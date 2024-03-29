import Head from 'next/head';
import type { FC } from 'react';

export const HeadMeta: FC = () => (
  <Head>
    <title>Is it Friday</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />

    <link rel="manifest" href="/manifest.json" />
  </Head>
);
