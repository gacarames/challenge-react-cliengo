// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: './src/test/custom-jest-environment.js'
};

module.exports = config;

module.exports = async () => {
  return {
    verbose: true
  };
};
