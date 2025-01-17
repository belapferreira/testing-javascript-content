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

const utilsPath = require.resolve('../utils');
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((player1, _) => player1),
  },
};

const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const winner = thumbWar('Jane', 'John');
assert.strictEqual(winner, 'Jane');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Jane', 'John'],
  ['Jane', 'John'],
]);

// Restore the original getWinner property
delete require.cache[utilsPath];
