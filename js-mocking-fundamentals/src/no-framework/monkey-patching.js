const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

const originalGetWinner = utils.getWinner;

// Override the getWinner property
utils.getWinner = (player1, _) => player1;

const winner = thumbWar('Jane', 'John');
assert.strictEqual(winner, 'Jane');

// Restore the original getWinner property
utils.getWinner = originalGetWinner;
