import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Details from '../client/components/details.jsx';


let propsObj = {
  info: {
    id: 1,
    title: "Incredible Steel Car",
    publisher: "Feest - Schiller",
    content_rating: 7,
    userRating: 2.5,
    priceNew: 68.85,
    priceUsed: 31.05,
    currentStockNew: 3,
    currentStockUsed: 0,
  },
  esrb: {
    name: "rating-pending",
    url: "https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/7.png"
  },
};


afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<Details
    title={propsObj.info.title}
    publisher={propsObj.info.publisher}
    EsrbSrc={propsObj.esrb.url}
    EsrbCat={propsObj.esrb.name} />);
  expect(asFragment()).toMatchSnapshot();
});