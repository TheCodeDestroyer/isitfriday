import { get, isEmpty, isUndefined } from 'lodash';
import { envObj } from '../constant/app.constant';

export const getEnvValue = (env, fallbackValue, skipError = false) => {
  let envValue = get(envObj, env);

  if (isEmpty(envValue) && !skipError) {
    // eslint-disable-next-line no-console
    console.error(`Missing value for ${env}`);
  }

  if (isEmpty(envValue) && !isUndefined(fallbackValue)) {
    envValue = fallbackValue;
  }

  return envValue;
};

const appConfig = {
  giphyApiKey: getEnvValue('VITE_GIPHY_API_KEY'),
  gaKey: getEnvValue('VITE_GA_KEY')
};

export default appConfig;
