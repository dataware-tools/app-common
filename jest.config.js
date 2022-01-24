module.exports = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testEnvironment: "jsdom",
  verbose: true,
};
