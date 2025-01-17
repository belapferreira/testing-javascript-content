const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner');
  utils.getWinner.mockImplementation((player1, _) => player1); // Override the getWinner property

  const winner = thumbWar('Jane', 'John');

  expect(winner).toBe('Jane');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Jane', 'John'],
    ['Jane', 'John']
  ]);

  // Restore the original getWinner property
  utils.getWinner.mockRestore();
});
