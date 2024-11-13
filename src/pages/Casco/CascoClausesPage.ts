import { Page, expect } from "@playwright/test";
import { CascoClausesPageLocators } from "../../locators/casco/CascoClauses";

export class CascoClausesPageCasco {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async cascoClausesPageCasco() {
    await expect(
      CascoClausesPageLocators.strikesRiotsCivilDisturbancesLabel(this.page)
    ).toBeVisible();
    await CascoClausesPageLocators.strikesRiotsCivilDisturbancesRadioButton(
      this.page
    ).click();
    await expect(
      CascoClausesPageLocators.workInstallationLabel(this.page)
    ).toBeVisible();
    await CascoClausesPageLocators.workInstallationRadioButton(
      this.page
    ).click();
    await expect(
      CascoClausesPageLocators.damageCausedByTransportLabel(this.page)
    ).toBeVisible();
    await CascoClausesPageLocators.damageCausedByTransportRadioButton(
      this.page
    ).click();
    await expect(
      CascoClausesPageLocators.loadingOfGoodsLabel(this.page)
    ).toBeVisible();
    await CascoClausesPageLocators.loadingOfGoodsRadioButton(this.page).click();
    await expect(
      CascoClausesPageLocators.tiresRimasLabel(this.page)
    ).toBeVisible();
    await expect(
      CascoClausesPageLocators.territorialExpansionLabel(this.page)
    ).toBeVisible();
    await expect(
      CascoClausesPageLocators.extensionLabel(this.page)
    ).toBeVisible();
    await expect(CascoClausesPageLocators.carriersLabel(this.page)).toBeVisible;
    await CascoClausesPageLocators.nextButton(this.page).click();
  }
}
