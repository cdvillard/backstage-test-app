// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '..';

describe('app-components/NotFound', () => {
  it('Matches snapshot', () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
