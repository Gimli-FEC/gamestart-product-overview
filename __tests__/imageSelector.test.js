import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import $ from 'jquery';

import ImageSelector from '../client/components/imgSelector.jsx';

jest.mock('$');

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<ImageSelector />);
  expect(asFragment()).toMatchSnapshot();
});