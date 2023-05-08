module.exports = {
  rootDir: '../',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/config/test.config.js'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['dist'],
    transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};