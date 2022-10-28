// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

/**
 * Cloned from saturn-ui-libs/session
 *
 * - Modified the parameter for `getMessage` to match latest
 *   enforced patterns by react-intl
 *   (https://formatjs.io/docs/react-intl/api/#formatmessage)
 */

import { WORKFLOW_PRESENTERS } from './constants';

import SessionTimeoutWorkflow from './Workflow';

const workflow = (getMessage) => ({
  Component: SessionTimeoutWorkflow,
  presenter: WORKFLOW_PRESENTERS.MODAL.SMALL,
  // title: getMessage('refresh.prompt.title'),
  title: getMessage({id: 'refresh.prompt.title'}),
});

export default workflow;
