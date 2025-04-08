import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'

// This is no needed because the project has a config to import it automatically
// in every test
// import 'jest-axe/extend-expect'

function Form() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input id="email" placeholder="email" />
    </form>
  )
}

test('the form is accessible', async () => {
  const {container} = render(<Form />)

  const results = await axe(container)

  expect(results).toHaveNoViolations()
})
