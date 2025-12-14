'use client';

import type { FC } from 'react';
import { useMemo } from 'react';

import { filter, flatten, includes, isEmpty } from 'lodash';
import moment from 'moment/moment';
import { useSearchParams } from 'next/navigation';

import { Footer } from '@components/Footer';
import { Gif } from '@components/Gif';
import { IsItFriday } from '@components/IsItFriday';

interface HookReturn {
  isItFriday: boolean;
  dayOfWeek: string;
  year: string;
}

const usePrepareData = (slug: string[] = []): HookReturn => {
  const searchParams = useSearchParams();

  const queryTuples: [string, string][] = Array.from(searchParams.entries());
  const queryKeysAndValues = flatten(queryTuples);

  const allParams = [...queryKeysAndValues, ...slug];

  const filteredParams = filter(allParams, (param) =>
    includes(['force', 'f'], param),
  );

  const isForced = !isEmpty(filteredParams);

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

interface AppProps {
  slugs?: string[];
}

const App: FC<AppProps> = ({ slugs }) => {
  const { dayOfWeek, year, isItFriday } = usePrepareData(slugs);

  return (
    <main className="flex h-screen flex-col items-center justify-center text-center text-xl">
      <div className="h-[85px] p-5">
        <h1 className="my-6 text-4xl">Is it Friday?</h1>
      </div>
      <IsItFriday friday={isItFriday} weekday={dayOfWeek} />
      <Gif weekday={dayOfWeek} />
      <Footer year={year} />
    </main>
  );
};

export default App;
