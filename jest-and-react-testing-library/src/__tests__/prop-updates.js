import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {rerender} = render(<FavoriteNumber />)

  const input = screen.getByLabelText(/favorite Number/i)
  userEvent.type(input, '10')

  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)

  rerender(<FavoriteNumber max={10} />)

  expect(screen.queryByRole('alert')).toBeNull()
})
