// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import { SESSION_APP_NAME, PROD_APP_NAME } from './constants';

export const getAppName = (appName, getMessage) => {
  if (appName && appName !== SESSION_APP_NAME && appName !== PROD_APP_NAME) {
    return appName;
  }

  return getMessage({ id: 'errorBoundary.app.default.name' });
};
