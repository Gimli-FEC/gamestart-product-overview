import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Details from '../client/components/details.jsx';

const propsObj = {
  info: {
    id: 1,
    title: 'Practical Wooden Pants',
    publisher: 'Schuppe, Klocko and Kirlin',
    content_rating: 6,
    priceNew: 79.79,
    priceUsed: 39.31,
    currentStockNew: 3,
    currentStockUsed: 2,
  },
  esrb: {
    name: 'adults-only',
    url: 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/6.png',
  },
};

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<Details
    title={propsObj.info.title}
    publisher={propsObj.info.publisher}
    EsrbSrc={propsObj.esrb.url}
    EsrbCat={propsObj.esrb.name}
    priceNew={propsObj.info.priceNew}
    priceUsed={propsObj.info.priceUsed} />);
  expect(asFragment()).toMatchSnapshot();
});
