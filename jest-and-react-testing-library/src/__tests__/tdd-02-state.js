/* eslint-disable testing-library/prefer-explicit-assert */
import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Editor} from '../post-editor-02-state'

test('renders a form with title, content, tags, and a submit button', () => {
  render(<Editor />)

  screen.getByLabelText(/title/i)
  screen.getByLabelText(/content/i)
  screen.getByLabelText(/tags/i)
  const submitButton = screen.getByText(/submit/i)

  userEvent.click(submitButton)

  expect(submitButton).toBeDisabled()
})
