import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { Fragment } from 'react';

import { HeadMeta } from '@components/HeadMeta';

import '@public/index.css';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <HeadMeta />
    <Component {...pageProps} />
  </Fragment>
);

export default App;
