import { filter, get, includes, isEmpty, keys, values } from 'lodash';
import type { GetServerSideProps } from 'next';
import type { FC } from 'react';

import App from '@components/App';

interface PageWithParamsProps {
  isForced: boolean;
}

export const getServerSideProps: GetServerSideProps<
  PageWithParamsProps
> = async ({ query }) => {
  const queryKeys = keys(query);
  const queryValues = values(query);
  const slug = get(query, '.slug');

  const allParams = [...queryKeys, ...queryValues, slug];

  const isForced = filter(allParams, (param) =>
    includes(['force', 'f'], param)
  );

  return {
    props: {
      isForced: !isEmpty(isForced)
    }
  };
};

const PageWithParams: FC<PageWithParamsProps> = ({ isForced }) => (
  <App isForced={isForced} />
);

export default PageWithParams;
