import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '../client/components/button.jsx';

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<Button />);
  expect(asFragment()).toMatchSnapshot();
});
