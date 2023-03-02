import { filter, get, includes, isEmpty, keys, values } from 'lodash';
import moment from 'moment/moment';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useMemo } from 'react';

import { Footer } from '@components/Footer';
import { Gif } from '@components/Gif';
import { IsItFriday } from '@components/IsItFriday';

interface HookReturn {
  isItFriday: boolean;
  dayOfWeek: string;
  year: string;
}

const usePrepareData = (): HookReturn => {
  const router = useRouter();

  const isForced = useMemo((): boolean => {
    const queryKeys = keys(router.query);
    const queryValues = values(router.query);
    const slug = get(router.query, '.slug');

    const allParams = [...queryKeys, ...queryValues, slug];

    const isForced = filter(allParams, (param) =>
      includes(['force', 'f'], param)
    );

    return !isEmpty(isForced);
  }, [router.query]);

  const currentDate = useMemo(() => moment(), []);
  const dayOfWeek = useMemo(() => {
    if (isForced) {
      return 'Friday';
    }

    return currentDate.format('dddd');
  }, [currentDate, isForced]);
  const year = useMemo(() => currentDate.format('YYYY'), [currentDate]);
  const isItFriday = useMemo((): boolean => {
    const isFriday: boolean = currentDate.isoWeekday() === 5;

    return isFriday || isForced;
  }, [currentDate, isForced]);

  return { dayOfWeek, year, isItFriday };
};

const App: FC = () => {
  const { dayOfWeek, year, isItFriday } = usePrepareData();

  return (
    <main className="app">
      <div className="app-header">
        <h1>Is it Friday?</h1>
      </div>
      <IsItFriday friday={isItFriday} weekday={dayOfWeek} />
      <Gif weekday={dayOfWeek} />
      <Footer year={year} />
    </main>
  );
};

export default App;
