/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["dotenv/config"],
  moduleNameMapper: {
      "@controllers/(.*)": "<rootDir>/controllers/$1",
      "@models/(.*)": "<rootDir>/models/$1",
      "@types/(.*)": "<rootDir>/types/$1",
      "@utils/(.*)": "<rootDir>/utils/$1",
  }
};
