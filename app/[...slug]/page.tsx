import type { FC } from 'react';

import App from '@components/App';

const PageWithParams: FC<{ params: { slug: string } }> = ({ params }) => {
  return <App slug={params.slug} />;
};

export default PageWithParams;
