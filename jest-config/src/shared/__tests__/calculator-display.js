import React from 'react'
import {render} from '@testing-library/react'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        id="calculator-display"
        style="position: relative; color: white; background: rgb(28, 25, 28); line-height: 130px; font-size: 6em; flex: 1;"
      >
        <div
          class="autoScalingText"
          data-testid="total"
          style="transform: scale(1,1);"
        >
          0
        </div>
      </div>
    </div>
  `)
})
