import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Učitavanje `.env` fajla za konfiguraciju iz okruženja
dotenv.config({ path: path.resolve(__dirname, ".env") });

// Postavljanje okruženja (default: "dev") i tipa korisnika (default: "Admin")
const ENV = process.env.ENV || "dev";
const USER_TYPE = process.env.USER_TYPE || "Admin";

// Konfiguracija za različita okruženja sa korisničkim podacima
const configData = {
  dev: {
    baseURL: process.env.DEV_BASE_URL || "https://bcr.grecoit.online", // Osnovni URL za dev okruženje
    users: {
      External: {
        email:
          process.env.DEV_EXTERNAL_EMAIL || "test1@grecoit.onmicrosoft.com", // Email za spoljnog korisnika u dev okruženju
        password: process.env.DEV_EXTERNAL_PASSWORD || "uzBG2UN6szx!WX4crF4r", // Lozinka za spoljnog korisnika u dev okruženju
      },
      Admin: {
        email: process.env.DEV_ADMIN_EMAIL || "testjohndoe@grecoit.online", // Email za admin korisnika u dev okruženju
        password: process.env.DEV_ADMIN_PASSWORD || "hL5jU+_BfP%2ugLZU*eC", // Lozinka za admin korisnika u dev okruženju
      },
    },
  },
  test: {
    baseURL: process.env.TEST_BASE_URL || "https://bcr-testing.grecoit.online", // Osnovni URL za test okruženje
    users: {
      External: {
        email:
          process.env.TEST_EXTERNAL_EMAIL || "test1@grecoit.onmicrosoft.com", // Email za spoljnog korisnika u test okruženju
        password: process.env.TEST_EXTERNAL_PASSWORD || "uzBG2UN6szx!WX4crF4r", // Lozinka za spoljnog korisnika u test okruženju
      },
      Admin: {
        email: process.env.TEST_ADMIN_EMAIL || "testjohndoe@grecoit.online", // Email za admin korisnika u test okruženju
        password: process.env.TEST_ADMIN_PASSWORD || "hL5jU+_BfP%2ugLZU*eC", // Lozinka za admin korisnika u test okruženju
      },
    },
  },
};

// Dinamički odabir konfiguracije na osnovu ENV-a i tipa korisnika
export const selectedConfig = configData[ENV]; // Odabrana konfiguracija za trenutno okruženje
export const baseURL = selectedConfig.baseURL; // Osnovni URL za izabrano okruženje
export const selectedUser = selectedConfig.users[USER_TYPE]; // Odabrani korisnik na osnovu tipa korisnika

// Glavna konfiguracija Playwright-a
export default defineConfig({
  testDir: "./src/tests", // Lokacija gde se nalaze testovi

  // Timeout podešavanja
  timeout: 90000, // Maksimalno trajanje jednog testa (90 sekundi)
  expect: {
    timeout: 30000, // Timeout za `expect` asercije (30 sekundi)
  },
  use: {
    actionTimeout: 30000, // Timeout za pojedinačne akcije (30 sekundi)
    navigationTimeout: 60000, // Timeout za navigaciju i učitavanje stranica (60 sekundi)
    baseURL: baseURL, // Postavljanje osnovnog URL-a za sve testove
    trace: "on-first-retry", // Omogućava snimanje traga na prvoj grešci
    headless: true, // Izvršavanje testova bez prikazivanja prozora preglednika
    screenshot: "only-on-failure", // Snimanje ekrana samo kada test ne uspe
    video: "retain-on-failure", // Zadržavanje video zapisa samo za neuspele testove
    viewport: null, // Koristi maksimalnu veličinu prozora (fullscreen)
    launchOptions: {
      args: ["--start-maximized", "--window-size=1920,1080"], // Maksimizacija prozora preglednika
    },
    ignoreHTTPSErrors: true, // Ignorisanje grešaka vezanih za HTTPS sertifikate
  },

  // Paralelno izvršavanje i retries
  fullyParallel: true, // Omogućava potpuno paralelno izvršavanje testova
  workers: process.env.CI ? 1 : 2, // Koristi 1 radnika na CI ili 2 lokalno
  retries: process.env.CI ? 2 : 0, // Dva ponavljanja testa na CI, bez ponavljanja lokalno

  // Ostale opcije
  forbidOnly: !!process.env.CI, // Sprečava `test.only` u CI okruženju
  reporter: "html", // HTML reporter za rezultate testova

  // Projekti za različite pretraživače
  projects: [
    {
      name: "Microsoft Edge", // Naziv projekta za Microsoft Edge
      use: { ...devices["Desktop Edge"], channel: "msedge" }, // Konfiguracija za Microsoft Edge
    },
    // Dodajte druge pretraživače po potrebi
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

// Export potrebnih vrednosti za upotrebu u testovima
export const users = selectedConfig.users; // Lista korisnika za odabrano okruženje
export const user = selectedUser; // Trenutno aktivni korisnik
