import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import $ from 'jquery';

import Ratings from '../client/components/ratings.jsx';


afterEach(cleanup);

jest.mock('$');

test('renders the component properly', () => {
  const { asFragment } = render(<Ratings />);
  expect(asFragment()).toMatchSnapshot();
});

test('loads tooltip when hovering over rating stars', () => {
  const result = render(<Ratings />);
  fireEvent.focus(result.getByTestId('tt'));
  expect(result.getByTestId('tt')).toBeInTheDocument();
});
