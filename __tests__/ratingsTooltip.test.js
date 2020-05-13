import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from '../client/components/ratingsTooltip.jsx';

const propsObj = {
  message: `
      Rating: 4 out of 5\n
      (based on 100 reviews)\n
      5⭑: 20% \n
      4⭑: 20% \n
      3⭑: 20% \n
      2⭑: 20% \n
      1⭑: 20%`,
};

afterEach(cleanup);

test('renders', () => {
  const { asFragment } = render(<Tooltip message={propsObj.message} />);
  expect(asFragment()).toMatchSnapshot();
});
