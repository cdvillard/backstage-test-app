// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Box, Text, Anchor } from 'grommet';
import { useIntl } from 'react-intl';
import LockIcon from './LockIcon';
import { DOCUMENTATION_URL } from './constants';

export const NoPermissions = () => {
  const { formatMessage } = useIntl();

  return (
    <Box
      full={true}
    >
      <Box
        align='center'
        flex='grow'
        justify='center'
        data-e2e='no-permissions'
      >
        <Box align='center' gap='medium'>
          <LockIcon />
          <Text>
            {formatMessage({id: 'noPermissions.description'})}
          </Text>
          <Text>
            {formatMessage(
              {id: 'noPermissions.nextSteps'},
              {
                dashboardLink: (
                  <Anchor
                    key='dashboardLink'
                    href='/'
                    label={formatMessage({id: 'noPermissions.dashboard'})}
                  />),
              }
            )}
          </Text>
          <Box direction='row' gap='xsmall'>
            <Anchor
              href={DOCUMENTATION_URL}
              target='_blank'
              rel='noopener noreferrer'
              label={formatMessage({id: 'noPermissions.documentation'})}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
