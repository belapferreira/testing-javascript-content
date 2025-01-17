const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return implementation(...args);
  };
  
  mockFn.mock = {
    calls: []
  };

  mockFn.mockImplementation = newImplementation => (implementation = newImplementation);

  return mockFn;
}

function spyOn(object, property) {
  const originalValue = object[property];

  object[property] = fn();

  object[property].mockRestore = () => (object[property] = originalValue);
}

spyOn(utils, 'getWinner');

// Override the getWinner property
utils.getWinner.mockImplementation((player1, _) => player1);

const winner = thumbWar('Jane', 'John');
assert.strictEqual(winner, 'Jane');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jane', 'John'],
  ['Jane', 'John'],
]);

// Restore the original getWinner property
utils.getWinner.mockRestore();
