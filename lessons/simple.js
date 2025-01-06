const sum = (a, b) => a - b;
const sub = (a, b) => a - b;


// Sum
let result = sum(3, 7);
let expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`Sum is equal to ${result}`);
}

// Sub
result = sub(7, 3);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
} else {
  console.log(`Sub is equal to ${result}`);
}

