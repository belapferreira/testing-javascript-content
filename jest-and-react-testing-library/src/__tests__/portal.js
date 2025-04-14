import React from 'react'
import {render, screen} from '@testing-library/react'
import {Modal} from '../modal'

test('modal shows the children', () => {
  render(
    <>
      <div data-testid="foo" />

      <Modal>
        <div data-testid="test" />
      </Modal>
    </>,
    {baseElement: document.getElementById('modal-root')},
  )

  // const { getByTestId } = within(document.getElementById('modal-root'))

  // To get elements outside de modal
  // screen.getByTestId('foo')
  // within(document.body).getByTestId('foo')
  // queries.getByTestId(document.body, 'foo')

  // Use with within utility
  // expect(getByTestId('test')).toBeInTheDocument()

  expect(screen.getByTestId('test')).toBeInTheDocument()
})
