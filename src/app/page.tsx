import { Suspense } from 'react';

import App from '@components/App';

const HomePage = () => (
  <Suspense>
    <App />
  </Suspense>
);

export default HomePage;
