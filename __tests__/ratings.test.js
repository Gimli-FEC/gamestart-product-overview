import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Ratings from '../client/components/ratings.jsx';


afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<Ratings />);
  expect(asFragment()).toMatchSnapshot();
});
