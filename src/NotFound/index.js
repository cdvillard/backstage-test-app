// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
} from 'grommet';
import { useIntl } from 'react-intl';

export const NotFound = () => {
  const { formatMessage } =  useIntl();

  return (
    <Box
      margin={{ top: 'medium' }}
      align='center'
      pad='medium'
    >
      <Heading level={2}>
        {formatMessage({id: 'notFound.title'})}
      </Heading>
      <Text size='xlarge'>
        {formatMessage({id: 'notFound.description'})}
      </Text>
      <Box pad={{ vertical: 'medium' }}>
        <Button
          primary={true}
          label={formatMessage({id: 'notFound.button'})}
          onClick={() => window.history.pushState(window.history.state, '', '/')}
        />
      </Box>
      <Box align='center'>
        <Heading level='3'>
          {formatMessage({id: 'notFound.explanations.title'})}
        </Heading>
        <Box
          gap='medium'
          direction='row'
          justify='center'
          wrap={true}
        >
          <Box
            pad='small'
            width='medium'
          >
            <Heading responsive={false} margin={{ bottom: 'small', top: 'none' }} level={4}>
              {formatMessage({id: 'notFound.explanationOne.title'})}
            </Heading>
            <Text size='large'>
              {formatMessage({id: 'notFound.explanationOne.body'})}
            </Text>
          </Box>
          <Box
            pad='small'
            width='medium'
          >
            <Heading responsive={false} margin={{ bottom: 'small', top: 'none' }} level={4}>
              {formatMessage({id: 'notFound.explanationTwo.title'})}
            </Heading>
            <Text size='large'>
              {formatMessage({id: 'notFound.explanationTwo.body'})}
            </Text>
          </Box>
          <Box
            pad='small'
            width='medium'
          >
            <Heading responsive={false} margin={{ bottom: 'small', top: 'none' }} level={4}>
              {formatMessage({id: 'notFound.explanationThree.title'})}
            </Heading>
            <Text size='large'>
              {formatMessage({id: 'notFound.explanationThree.body'})}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
