import { Suspense } from 'react';
import type { FC } from 'react';

import App from '@components/App';

interface PageWithParamsProps {
  params: Promise<{
    slugs: string[];
  }>;
}

const PageWithParams: FC<PageWithParamsProps> = async ({ params }) => {
  const { slugs } = await params;

  return (
    <Suspense>
      <App slugs={slugs} />
    </Suspense>
  );
};

export default PageWithParams;
