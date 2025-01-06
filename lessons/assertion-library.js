const { sum, sub } = require('../utils/math');

let result, expected;

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

// Sum
result = sum(3, 7);
expected = 10;

expect(result).toBe(expected);

// Sub
result = sub(7, 3);
expected = 4;

expect(result).toBe(expected);

