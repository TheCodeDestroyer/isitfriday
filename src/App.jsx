import React, { useMemo } from 'react';
import moment from 'moment';

import IsItFriday from './component/IsItFriday';
import Gif from './component/Gif';
import Footer from './component/Footer';
import { includes, lowerCase, words } from 'lodash';

const usePrepareData = () => {
  const { pathname } = window.location;

  const isForced = useMemo(() => {
    const keywords = words(pathname);
    const lowerKeywords = lowerCase(keywords);

    return includes(lowerKeywords, 'f');
  }, [pathname]);

  const currentDate = useMemo(() => moment(), []);
  const dayOfWeek = useMemo(() => {
    if (isForced) {
      return 'Friday';
    }

    return currentDate.format('dddd');
  }, [currentDate, isForced]);
  const year = useMemo(() => currentDate.format('YYYY'), [currentDate]);
  const isItFriday = useMemo(
    () => currentDate.isoWeekday() === 5 || isForced,
    [currentDate, isForced]
  );

  return { dayOfWeek, year, isItFriday };
};

const App = () => {
  const { dayOfWeek, year, isItFriday } = usePrepareData();

  return (
    <div className="app">
      <div className="app-header">
        <h1>Is it Friday?</h1>
      </div>
      <IsItFriday friday={isItFriday} weekday={dayOfWeek} />
      <Gif weekday={dayOfWeek} />
      <Footer year={year} />
    </div>
  );
};

export default App;
