// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

/**
 * Cloned from saturn-ui-libs/session
 *
 * - Modified the parameter for `getMessage` to match latest
 *   enforced patterns by react-intl
 *   (https://formatjs.io/docs/react-intl/api/#formatmessage)
 */

import React from 'react';
import {
  Box,
  Text,
  Button,
} from 'grommet';
import { useIntl } from 'react-intl';
import { getRefreshHandler } from './handlers';
import { SIGN_OUT_URI } from '../../constants';

export function SessionTimeout() {
  const { formatMessage } = useIntl();
  const handleRefresh = getRefreshHandler();
  return (
    <Box>
      <Text>
        {formatMessage({id: 'refresh.prompt.text'})}
      </Text>
      <Box
        flex={true}
        direction='row'
        gap='medium'
        alignSelf='end'
        margin={{ top: 'medium', bottom: 'xsmall' }}
      >
        <Button
          primary={true}
          label={formatMessage({id: 'refresh.prompt.continue'})}
          fill={false}
          onClick={handleRefresh}
        />
        <Button
          secondary={true}
          label={formatMessage({id: 'refresh.prompt.logout'})}
          fill={false}
          onClick={() => window.location.assign(SIGN_OUT_URI)}
        />
      </Box>
    </Box>
  );
}

export default SessionTimeout;
