const { sumAsync, subAsync } = require('../utils/math');

// Sum
test('Sum numbers', async () => {
  const result = await sumAsync(3, 7); 
  const expected = 10;

  expect(result).toBe(expected);
});

// Sub
test('Sub numbers', async () => {
  const result = await subAsync(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});
