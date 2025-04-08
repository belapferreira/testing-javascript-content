import React from 'react'
import {render, screen} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  render(<FavoriteNumber />)

  const input = screen.getByLabelText(/favorite Number/i)
  expect(input).toHaveAttribute('type', 'number')

  // Just to show that is possible to debug things while testing
  // screen.debug(input)
})
