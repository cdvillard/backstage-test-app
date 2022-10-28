import React from 'react';
import { useIntl } from 'react-intl';
import { Alert } from 'grommet-icons';
import {
  Box,
  Heading,
  Button,
  Text,
} from 'grommet';
import PropTypes from 'prop-types';
import {
  SUPPORT_URL,
  SESSION_APP_NAME,
} from './../utils/constants';
import { getAppName } from './../utils/getAppName';

export const AppErrorBoundary = ({ appName }) => {
  /**
   * formatMessage (https://formatjs.io/docs/react-intl/api/#formatmessage)
   * At a minimum, requires a MessageDescriptor object with an `id` property.
   * Additional conditional values can be passed in as an object. (see line 43)
   */
  const { formatMessage } = useIntl();
  return (
    <Box
      height='80%'
      justify='center'
      align='center'
    >
      <Box
        align='center'
        width={{ max: 'medium' }}
      >
        <Alert
          size='large'
          color='black'
        />
        <Heading textAlign='center' level={4}>
          {formatMessage(
            { id: 'errorBoundary.app.title' },
            { app: getAppName(appName, formatMessage) },
          )}
        </Heading>
        <Text textAlign='center' size='medium'>
          {formatMessage({ id: 'errorBoundary.app.desc' })}
        </Text>
        <Box
          flex={{ shrink: 0 }}
          direction='row'
          justify='around'
          gap='medium'
          pad={{ vertical: 'medium' }}
        >
          {appName !== SESSION_APP_NAME && (
            <Button
              secondary={true}
              label={formatMessage({ id: 'errorBoundary.app.support' })}
              onClick={() => window.open(SUPPORT_URL, '_blank')}
            />
          )}
          <Button
            primary={true}
            label={formatMessage({ id: 'errorBoundary.app.refresh' })}
            onClick={() => window.location.reload()}
          />
        </Box>
      </Box>
    </Box>
  );
}

AppErrorBoundary.propTypes = {
  appName: PropTypes.string,
};

AppErrorBoundary.defaultProps = {
  appName: '',
};
