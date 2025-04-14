import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {submitForm as mockSubmitForm} from '../api'
import App from '../app'

jest.mock('../api')

test('can fill out a form across multiple pages', async () => {
  mockSubmitForm.mockResolvedValueOnce({success: true})

  const testData = {food: 'test food', drink: 'test drink'}

  render(<App />)

  userEvent.click(screen.getByText(/fill.*form/i))

  fireEvent.change(screen.getByLabelText(/food/i), {
    target: {value: testData.food},
  })
  userEvent.click(screen.getByText(/next/i))

  fireEvent.change(screen.getByLabelText(/drink/i), {
    target: {value: testData.drink},
  })
  userEvent.click(screen.getByText(/review/i))

  expect(screen.getByLabelText(/food/i)).toHaveTextContent(testData.food)
  expect(screen.getByLabelText(/drink/i)).toHaveTextContent(testData.drink)

  userEvent.click(screen.getByText(/confirm/i, {selector: 'button'}))

  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)

  userEvent.click(await screen.findByText(/home/i))
  expect(screen.getByText(/welcome home/i)).toBeInTheDocument()
})
