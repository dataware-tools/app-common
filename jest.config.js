module.exports = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./src/setupTest.ts"],
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
};
