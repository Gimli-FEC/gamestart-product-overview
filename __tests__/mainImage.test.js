import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainImage from '../client/components/mainImage.jsx';



afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<MainImage url={"https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/500.jpeg"} />);
  expect(asFragment()).toMatchSnapshot();
});