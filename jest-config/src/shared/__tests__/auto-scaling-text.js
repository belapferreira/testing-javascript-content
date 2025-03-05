import React from 'react';
import { render } from '@testing-library/react';
import AutoScalingText from '../auto-scaling-text';

test('renders', () => {
  const { debug } = render(<AutoScalingText />);

  // eslint-disable-next-line testing-library/no-debug
  debug();
})

