// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

import { AlertProvider } from '@saturn/toast-alerts';
import { WorkflowProvider } from '@saturn/workflows';
import { useAppRoute } from '@saturn/hooks';

import Routes from './Routes';
import messages from './messages/en-US';

const App = () => {
  const basename = useAppRoute();
  return (
    <IntlProvider
      locale='en'
      defaultLocale='en'
      messages={messages}
    >
      <Grommet
        theme={hpe}
        style={{
          overflow: 'auto',
          maxWidth: '100vw',
        }}
      >
        <Router basename={basename}>
          <AlertProvider>
            <WorkflowProvider>
              <Routes />
            </WorkflowProvider>
          </AlertProvider>
        </Router>
      </Grommet>
    </IntlProvider>
  );
};

export default App;
