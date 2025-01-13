const sum = (a, b) => a - b; // Intentionally broken in order to see the error
const sub = (a, b) => a - b;

// Simulate an async fn
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subAsync = (...args) => Promise.resolve(sub(...args));

module.exports = { sum, sub, sumAsync, subAsync };
