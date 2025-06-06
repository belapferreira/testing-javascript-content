import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Provider} from 'react-redux'
import {store} from '../redux-store'
import {Counter} from '../redux-counter'

test('can render with redux with defaults', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )

  userEvent.click(screen.getByText('+'))

  expect(screen.getByLabelText(/count/i)).toHaveTextContent('1')
})
