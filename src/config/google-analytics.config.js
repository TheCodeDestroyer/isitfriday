import ReactGA from 'react-ga';

import appConfig from './app.config';

ReactGA.initialize('UA-146578532-1');
ReactGA.initialize(appConfig.gaKey);
ReactGA.pageview(window.location.pathname);
