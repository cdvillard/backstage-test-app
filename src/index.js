import React from 'react';
import * as ReactDOM from 'react-dom/client';
import singleSpaReact from 'single-spa-react';

import { CoreProvider } from '@saturn/hooks';

import ErrorBoundary from './ErrorBoundary';
import App from './App';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (data) => (
    <CoreProvider data={data}>
      <App />
    </CoreProvider>
  ),
  errorBoundary: (_, __, props) => (
    <ErrorBoundary displayName={props.displayName} />
  ),
});

export const { bootstrap } = reactLifecycles;
export const { mount } = reactLifecycles;
export const { unmount } = reactLifecycles;
