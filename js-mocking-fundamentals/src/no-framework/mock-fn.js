const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

function fn(implementation) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return implementation(...args);
  };
  
  mockFn.mock = {
    calls: []
  };

  return mockFn;
}

// Override the getWinner property
utils.getWinner = fn((player1, _) => player1);

const winner = thumbWar('Jane', 'John');
assert.strictEqual(winner, 'Jane');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jane', 'John'],
  ['Jane', 'John'],
]);

// Restore the original getWinner property
utils.getWinner = originalGetWinner;
