const { sum, sub } = require('../utils/math');

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

function test(title, callback) {
  try {
    callback();
    console.log(`✔️ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      } else {
        console.log(`The result is equal to ${actual}`);
      }
    }
  }
}

