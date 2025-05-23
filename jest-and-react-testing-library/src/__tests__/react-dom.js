import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)

  expect(div.querySelector('input').type).toBe('number')
  // eslint-disable-next-line jest-dom/prefer-to-have-text-content
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})
