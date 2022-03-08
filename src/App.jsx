import React, { useMemo } from 'react';
import moment from 'moment';

import IsItFriday from './component/IsItFriday';
import Gif from './component/Gif';
import Footer from './component/Footer';

const usePrepareData = () => {
  const currentDate = useMemo(() => moment(), []);
  const dayOfWeek = useMemo(() => currentDate.format('dddd'), []);
  const year = useMemo(() => currentDate.format('YYYY'), []);
  const isItFriday = useMemo(
    () => currentDate.isoWeekday() === 5,
    [currentDate]
  );

  return { dayOfWeek, year, isItFriday };
};

const App = () => {
  const { dayOfWeek, year, isItFriday } = usePrepareData();

  return (
    <div className="app">
      <div className="app-header">
        <h1>{'Is it friday?'}</h1>
      </div>
      <IsItFriday friday={isItFriday} weekday={dayOfWeek} />
      <Gif weekday={dayOfWeek} />
      <Footer year={year} />
    </div>
  );
};

export default App;
