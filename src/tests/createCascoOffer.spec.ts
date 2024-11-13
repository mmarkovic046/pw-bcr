import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { baseURL, user } from "../../playwright.config";
import { PageObjects } from "../pages/PageObjects";
import { VehiclePageCasco } from "../pages/Casco/VehiclePage";
import { CascoClausesPageCasco } from "../pages/Casco/CascoClausesPage";
import { ReductionAndIncreasePageCasco } from "../pages/Casco/ReductionAndIncreasePage";
import { OfferPageCasco } from "../pages/Casco/OfferPage";
import { GeneralPageCasco } from "../pages/Casco/GeneralPage";
import { ClientPageCasco } from "../pages/Casco/ClientPage";

test.describe("CASCO Offer", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(baseURL);
    const loginPage = new LoginPage(page);
    await loginPage.login(user.email, user.password);
    await loginPage.verifySuccessfulLogin();

    console.log("URL:", baseURL);
    console.log("E-mail:", user.email);
  });

  test("Create CASCO offer (Individual)", async ({ page }) => {
    await new PageObjects(page).newOfferCascoPage();
    await new GeneralPageCasco(page).generalPageIndividual();
    await new VehiclePageCasco(page).vehiclePageCasco();
    await new CascoClausesPageCasco(page).cascoClausesPageCasco();
    await new ReductionAndIncreasePageCasco(page).reductionTabCasco();
    await new ClientPageCasco(page).clientPageIndividual();
    await new OfferPageCasco(page).offerPageCasco();
  });
  // Skip test
  test.skip("Create CASCO offer (Legal)", async ({ page }) => {
    await new PageObjects(page).newOfferCascoPage();
    await new GeneralPageCasco(page).generalPageLegal();
    await new VehiclePageCasco(page).vehiclePageCasco();
    await new CascoClausesPageCasco(page).cascoClausesPageCasco();
    await new ReductionAndIncreasePageCasco(page).reductionTabCasco();
    await new ClientPageCasco(page).clientPageLegal();
    await new OfferPageCasco(page).offerPageCasco();
  });
});
