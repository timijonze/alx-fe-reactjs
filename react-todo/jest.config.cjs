module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./setupTests.js"]
  };
  