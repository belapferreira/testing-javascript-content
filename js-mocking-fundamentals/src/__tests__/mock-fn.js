const thumbWar = require('../thumb-war');
const utils = require('../utils');

test('returns winner', () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((player1, _) => player1); // Override the getWinner property

  const winner = thumbWar('Jane', 'John');

  expect(winner).toBe('Jane');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Jane', 'John'],
    ['Jane', 'John']
  ]);

  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  // expect(utils.getWinner).toHaveBeenCalledWith('Jane', 'John');
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Jane', 'John');
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Jane', 'John');

  // Restore the original getWinner property
  utils.getWinner = originalGetWinner;
});
