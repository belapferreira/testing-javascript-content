import React from 'react';
import { render } from 'calculator-test-utils';
import AutoScalingText from '../auto-scaling-text';

test('renders', () => {
  const { debug } = render(<AutoScalingText />);

  // eslint-disable-next-line testing-library/no-debug
  debug();
})

