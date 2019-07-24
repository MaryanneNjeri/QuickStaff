import { Constants } from 'expo';


const ENV = {
  dev: {
    API_URL: 'https://8f49b4c3.ngrok.io/api',
    amplitudeApiKey: null,
    API_KEY: 'AIzaSyA6ianjxY34CEjlAqq0pDsWbncN1e7TQ78',
  },
  staging: {
    API_URL: 'staging api here',
    amplitudeApiKey: null,
  },
  prod: {
    API_URL: 'production api here',
    amplitudeApiKey: null,
  },
};
const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } if (env === 'staging') {
    return ENV.staging;
  } if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
