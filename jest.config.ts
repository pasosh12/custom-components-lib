export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // '^.+\\.svg$': '<rootDir>/jest/svgTransformJest.ts',
  },
  transform:{
    '^.+\\.svg$': '<rootDir>/jest/svgTransformJest.ts'
  },
  transformIgnorePatterns: ['/node_modules/'],
};