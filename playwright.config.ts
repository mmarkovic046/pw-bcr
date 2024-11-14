import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const ENV = process.env.ENV || "dev";
const USER_TYPE = process.env.USER_TYPE || "Admin";

const configData = {
  dev: {
    baseURL: process.env.DEV_BASE_URL || "https://bcr.grecoit.online",
    users: {
      External: {
        email:
          process.env.DEV_EXTERNAL_EMAIL || "test1@grecoit.onmicrosoft.com",
        password: process.env.DEV_EXTERNAL_PASSWORD || "uzBG2UN6szx!WX4crF4r",
      },
      Admin: {
        email: process.env.DEV_ADMIN_EMAIL || "testjohndoe@grecoit.online",
        password: process.env.DEV_ADMIN_PASSWORD || "hL5jU+_BfP%2ugLZU*eC",
      },
    },
  },
  test: {
    baseURL: process.env.TEST_BASE_URL || "https://bcr-testing.grecoit.online",
    users: {
      External: {
        email:
          process.env.TEST_EXTERNAL_EMAIL || "test1@grecoit.onmicrosoft.com",
        password: process.env.TEST_EXTERNAL_PASSWORD || "uzBG2UN6szx!WX4crF4r",
      },
      Admin: {
        email: process.env.TEST_ADMIN_EMAIL || "testjohndoe@grecoit.online",
        password: process.env.TEST_ADMIN_PASSWORD || "hL5jU+_BfP%2ugLZU*eC",
      },
    },
  },
};

export const selectedConfig = configData[ENV];
export const baseURL = selectedConfig.baseURL;
export const selectedUser = selectedConfig.users[USER_TYPE];

export default defineConfig({
  testDir: "./src/tests",

  // Timeout podešavanja
  timeout: 90000, // Maksimalno trajanje jednog testa
  expect: {
    timeout: 30000, // Timeout za expect asercije
  },
  use: {
    actionTimeout: 30000, // Timeout za pojedinačne akcije
    navigationTimeout: 60000, // Timeout za navigaciju i učitavanje stranica
    baseURL: baseURL,
    trace: "on-first-retry",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    viewport: null,
    launchOptions: {
      args: ["--start-maximized", "--window-size=1920,1080"],
    },
    ignoreHTTPSErrors: true,
  },

  fullyParallel: true,
  workers: process.env.CI ? 1 : 2,
  retries: process.env.CI ? 2 : 0,

  forbidOnly: !!process.env.CI,
  reporter: "html",

  projects: [
    {
      name: "Microsoft Edge",
      use: { ...devices["Desktop Edge"], channel: "msedge" },
    },

    // {
    //   name: "chromium",
    //   use: { ...devices["Desktop Chrome"] },
    // },
    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },
    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});

export const users = selectedConfig.users;
export const user = selectedUser;
