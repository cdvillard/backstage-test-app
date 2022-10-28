// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import {
  REFRESH_TOKEN_LIFETIME,
  LOGIN_TIME,
  REFRESH_PROMPT_BUFFER,
  TENANTS_STORAGE_KEY,
} from './constants';

let refreshTimeout;

// The login time is set in the hub, right before logging into a tenant
// This allows us to calculate when to prompt the user to refresh, since
// we can't get the expiresAt (or other) field from the token
const calculateRefreshTimeout = () => {
  const loginTime = parseInt(sessionStorage.getItem(LOGIN_TIME), 10);
  const promptTime = loginTime + REFRESH_TOKEN_LIFETIME;
  const currentTime = Date.now();
  // 10 minutes before the refresh token lifetime expires
  return promptTime - currentTime - REFRESH_PROMPT_BUFFER;
};

// Triggers the "Refresh your screen to extend your session" modal
// If the user doesn't refresh then they will be logged out when the
// token manager detects an error
export const setRefreshTimeout = (openSessionTimeoutWorkflow) => {
  const timeout = calculateRefreshTimeout();
  console.warn(`Prompting user for refresh in ${timeout} milliseconds`);
  refreshTimeout = setTimeout(
    openSessionTimeoutWorkflow,
    timeout,
  );
};

export const getHandleAppStartup = (oktaAuth, openSessionTimeoutWorkflow) => () => {
  oktaAuth.tokenManager.on('error', (error) => {
    // On any error, including when the refresh token expires, just
    // log the user out
    console.error(error);
    sessionStorage.removeItem(TENANTS_STORAGE_KEY);
    sessionStorage.removeItem(LOGIN_TIME);
  });
  // Set the timeout until the user is prompted to refresh to extend their session
  // This is currently set at 8 hours after the user logs into the tenant
  // First, clear the previous timeout, in the event that the timeout needs reset or
  // cleared after a refresh
  clearTimeout(refreshTimeout);
  // Then we check if the prompt has already been triggered
  // If the user refreshes their browser after closing the prompt, then
  // we don't want to trigger it again.
  if (calculateRefreshTimeout() > 0) {
    setRefreshTimeout(openSessionTimeoutWorkflow);
  }
};
