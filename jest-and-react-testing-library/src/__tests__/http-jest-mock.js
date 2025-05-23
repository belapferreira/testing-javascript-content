import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {loadGreeting as mockLoadGreeting} from '../api'
import {GreetingLoader} from '../greeting-loader-01-mocking'

jest.mock('../api')

test('loads greeting on click', async () => {
  const textGreeting = 'TEST_GREETING'

  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: textGreeting}})

  render(<GreetingLoader />)

  const nameInput = screen.getByLabelText(/name/i)
  const loadButton = screen.getByText(/load/i)

  nameInput.value = 'Mary'
  userEvent.click(loadButton)

  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)

  await waitFor(() =>
    expect(screen.getByLabelText(/greeting/i)).toHaveTextContent(textGreeting),
  )
})
