require('../__no-framework-mocks__/utils');

const utilsPath = require.resolve('../utils');
const mockUtilsPath = require.resolve('../__no-framework-mocks__/utils');

require.cache[utilsPath] = require.cache[mockUtilsPath];

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
