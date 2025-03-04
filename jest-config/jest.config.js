  // Run in a node environment
  // testEnvironment: 'jest-environment-node',

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}
