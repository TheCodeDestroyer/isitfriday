import moment from 'moment/moment';
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

const usePrepareData = (isForced: boolean): HookReturn => {
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
  isForced?: boolean;
}

const App: FC<AppProps> = ({ isForced = false }) => {
  const { dayOfWeek, year, isItFriday } = usePrepareData(isForced);

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
