// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import React from 'react';
import { render } from '@testing-library/react';
import NoPermissions from '..';

describe('app-components/NoPermissions', () => {
  it('matches the snapshot', () => {
    const { container } = render(<NoPermissions />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
