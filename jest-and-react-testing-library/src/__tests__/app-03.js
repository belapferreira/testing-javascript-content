import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {submitForm as mockSubmitForm} from '../api'
import App from '../app-reach-router'

jest.mock('../api')

test('can fill out a form across multiple pages', async () => {
  mockSubmitForm.mockResolvedValueOnce({success: true})

  const testData = {food: 'test food', drink: 'test drink'}

  render(<App />)

  userEvent.click(await screen.findByText(/fill.*form/i))

  userEvent.type(await screen.findByLabelText(/food/i), testData.food)
  userEvent.click(await screen.findByText(/next/i))

  userEvent.type(await screen.findByLabelText(/drink/i), testData.drink)
  userEvent.click(await screen.findByText(/review/i))

  expect(await screen.findByLabelText(/food/i)).toHaveTextContent(testData.food)
  expect(await screen.findByLabelText(/drink/i)).toHaveTextContent(
    testData.drink,
  )

  userEvent.click(await screen.findByText(/confirm/i, {selector: 'button'}))

  expect(mockSubmitForm).toHaveBeenCalledWith(testData)
  expect(mockSubmitForm).toHaveBeenCalledTimes(1)

  userEvent.click(await screen.findByText(/home/i))
  expect(await screen.findByText(/welcome home/i)).toBeInTheDocument()
})
