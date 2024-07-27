import { defineConfig } from "cypress";
import cypressEnv from "./cypress.env.json";

export default defineConfig({
  e2e: {
    baseUrl: cypressEnv.baseUrl,
    video: false,
    screenshotOnRunFailure: false,
  },
  env: cypressEnv,
});
