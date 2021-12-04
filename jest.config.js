module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],  
  moduleNameMapper: {
    '@todo/(.*)': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: [
    "node_modules/(?!react-native|react)/"
  ],
  setupFiles: [
    "<rootDir>/jest-setup.js"
  ]
}