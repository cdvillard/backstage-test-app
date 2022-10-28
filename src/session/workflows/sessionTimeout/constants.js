// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

export const WORKFLOW_PRESENTERS = {
  WIZARD: {
    SMALL: 'WIZARD.SMALL',
    MEDIUM: 'WIZARD.MEDIUM',
    LARGE: 'WIZARD.LARGE',
    XLARGE: 'WIZARD.XLARGE',
  },
  FLYOUT: {
    LEFT: 'FLYOUT.LEFT',
    RIGHT: 'FLYOUT.RIGHT',
  },
  MODAL: {
    SMALL: 'MODAL.SMALL',
    MEDIUM: 'MODAL.MEDIUM',
    LARGE: 'MODAL.LARGE',
    XLARGE: 'MODAL.XLARGE',
  },
};

export const CONTAINER_PROPS = {
  'WIZARD.SMALL': {
    width: '480px',
  },
  'WIZARD.MEDIUM': {
    width: '880px',
  },
  'WIZARD.LARGE': {
    width: '1280px',
  },
  'WIZARD.XLARGE': {
    width: '1680px',
  },
  'MODAL.SMALL': {
    width: '480px',
  },
  'MODAL.MEDIUM': {
    width: '880px',
  },
  'MODAL.LARGE': {
    width: '1280px',
  },
  'MODAL.XLARGE': {
    width: '1680px',
  },
};

export const LAYER_PROPS = {
  'FLYOUT.LEFT': {
    position: 'left',
    full: 'vertical',
  },
  'FLYOUT.RIGHT': {
    position: 'right',
    full: 'vertical',
  },
};
