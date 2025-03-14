// yarn jest --showConfig
// To get the configuration and the globalConfig must have anything
// that is in your Jest config

module.exports = {
  ...require('./test/jest.common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 34,
      branches: 19,
      functions: 30,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: ['./test/jest.client.js', './test/jest.server.js'],
}
