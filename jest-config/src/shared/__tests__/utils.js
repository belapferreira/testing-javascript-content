import {getFormattedValue} from '../utils'

test('formats the value', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})

// console.log(window)

// Run in a node environment (without jest config)
// yarn test --env=node
