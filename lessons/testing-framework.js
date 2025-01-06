const { sum, sub } = require('../utils/math');
const { test, expect } = require('../utils/testing-functions');	

// Sum
test('Sum numbers', () => {
  const result = sum(3, 7); 
  const expected = 10;

  expect(result).toBe(expected);
});

// Sub
test('Sub numbers', () => {
  const result = sub(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});
