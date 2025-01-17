const thumbWar = require('../thumb-war');
const utils = require('../utils');

jest.mock('../utils', () => {
  return {
    getWinner: jest.fn((player1, _) => player1)
  };
});

test('returns winner', () => {
  const winner = thumbWar('Jane', 'John');

  expect(winner).toBe('Jane');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Jane', 'John'],
    ['Jane', 'John']
  ]);

  // Reset the original getWinner property
  utils.getWinner.mockReset();
});
