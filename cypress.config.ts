/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: { experimentalStudio: true },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    screenshotsFolder: "./.reg/actual",
  },
});

/* eslint-enable import/no-anonymous-default-export */
