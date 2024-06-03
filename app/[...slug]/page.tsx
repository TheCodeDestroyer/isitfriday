import { type FC, Suspense } from 'react';

import App from '@components/App';

const PageWithParams: FC<{ params: { slugs: string[] } }> = ({ params }) => (
  <Suspense>
    <App slugs={params.slugs} />
  </Suspense>
);

export default PageWithParams;
