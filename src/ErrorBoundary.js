import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

import { AppErrorBoundary } from './AppErrorBoundary';

import messages from './messages/en-US';

function ErrorBoundary({ displayName }) {
  return (
    <IntlProvider
      locale='en'
      defaultLocale='en'
      messages={messages}
    >
      <Grommet full={true} theme={hpe}>
        <AppErrorBoundary appName={displayName} />
      </Grommet>
    </IntlProvider>
  );
}

ErrorBoundary.propTypes = {
  displayName: PropTypes.string,
};

ErrorBoundary.defaultProps = {
  displayName: '',
};

export default ErrorBoundary;
