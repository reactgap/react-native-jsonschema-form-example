module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': require.resolve('react-native/jest/preprocessor.js'),
  },
  setupFiles: ['<rootDir>/enzyme.config.js'],
  coverageDirectory: 'coverage',
};