module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  rootDir: '..',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '\\.test\\.tsx?$',
  testPathIgnorePatterns: ['/dist/', '<rootDir>/node_modules/', '/setup/'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/stories',
    '<rootDir>/src/test.ts',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // What is here must reflect exactly what is in tsconfig
    '^test$': '<rootDir>/src/test',
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
