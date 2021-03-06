import debug from 'debug';
import { BccEra, BccNetwork } from './constants';

const isNavigatorDefined = typeof navigator !== 'undefined';

export const environment = {
  BCC: {
    ERA: (process.env.BCC_ERA as BccEra) || BccEra.COLE,
    GRAPHQL: {
      HTTP_URL: `${process.env.GRAPHQL_API_PROTOCOL || 'http'}://${
        process.env.GRAPHQL_API_HOST ||
        'localhost'
      }:${process.env.GRAPHQL_API_PORT || '3100'}/${
        process.env.GRAPHQL_API_PATH || ''
      }`,
    },
    NETWORK:
      (process.env.BCC_NETWORK as BccNetwork) || BccNetwork.MAINNET,
  },
  DEBUG: process.env.DEBUG,
  // https://support.google.com/analytics/answer/7372977?hl=en
  GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  IS_CLIENT: isNavigatorDefined,
  IS_SERVER: !isNavigatorDefined,
  PACKAGE: {
    HOMEPAGE: process.env.PACKAGE_HOMEPAGE,
    VERSION: process.env.PACKAGE_VERSION,
  },
  POLLING_INTERVAL: Number(process.env.POLLING_INTERVAL) || 10000,
};

if (environment.DEBUG) {
  debug.enable(environment.DEBUG);
}
