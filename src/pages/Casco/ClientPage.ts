import { expect, Page } from "@playwright/test";
import { ClientPageIndividualLocators } from "../../locators/casco/Client";
import { ClientPageLegalLocators } from "../../locators/casco/Client";

export class ClientPageCasco {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async clientPageIndividual() {
    await expect(
      ClientPageIndividualLocators.personalNumercalCodeLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.personalNumericalCodeField(
      this.page
    ).fill("1420930285106");
    await expect(
      ClientPageIndividualLocators.lastNameLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.lastNameField(this.page).fill("Doe");
    await expect(
      ClientPageIndividualLocators.firstNameLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.firstNameField(this.page).fill("John");
    await expect(
      ClientPageIndividualLocators.countryLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.counrtyField(this.page).selectOption(
      "bcr.County_BUCURESTI"
    );
    await expect(
      ClientPageIndividualLocators.townLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.townField(this.page).selectOption(
      "BUCURESTI SECTORUL 1"
    );
    await expect(
      ClientPageIndividualLocators.streetField(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.streetField(this.page).fill("Resavska");
    await expect(
      ClientPageIndividualLocators.numberLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.numberField(this.page).fill("66");
    await expect(
      ClientPageIndividualLocators.blockLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.blockField(this.page).fill("2");
    await expect(
      ClientPageIndividualLocators.entranceLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.entranceField(this.page).fill("3");
    await expect(
      ClientPageIndividualLocators.apartmentLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.apartmentField(this.page).fill("15");
    await expect(
      ClientPageIndividualLocators.floorLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.floorField(this.page).fill("4");
    await expect(ClientPageIndividualLocators.mobileLabel(this.page))
      .toBeVisible;
    await ClientPageIndividualLocators.mobileField(this.page).fill(
      "0740562978"
    );
    await expect(
      ClientPageIndividualLocators.emailLabel(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.emailField(this.page).fill(
      "markoPWtest@greco.com"
    );
    await expect(
      ClientPageIndividualLocators.nextButton(this.page)
    ).toBeVisible();
    await ClientPageIndividualLocators.nextButton(this.page).click();
  }

  async clientPageLegal() {
    await expect(
      ClientPageLegalLocators.umiqueRegistrtationCodeLabel(this.page)
    ).toBeVisible();
    await ClientPageLegalLocators.umiqueRegistrtationCodeField(this.page).fill(
      "36677840"
    );
    await expect(
      ClientPageLegalLocators.CompanyNameLabel(this.page)
    ).toBeVisible();
    await ClientPageLegalLocators.CompanyNameField(this.page).fill(
      "Test Company Name"
    );
    await expect(
      ClientPageLegalLocators.caenCodeLabel(this.page)
    ).toBeVisible();
    await ClientPageLegalLocators.caenCodeField(this.page).fill("02");
    await expect(ClientPageLegalLocators.countryLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.counrtyField(this.page).selectOption(
      "bcr.County_BUCURESTI"
    );
    await expect(ClientPageLegalLocators.townLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.townField(this.page).selectOption(
      "BUCURESTI SECTORUL 1"
    );
    await expect(ClientPageLegalLocators.streetField(this.page)).toBeVisible();
    await ClientPageLegalLocators.streetField(this.page).fill("Resavska");
    await expect(ClientPageLegalLocators.numberLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.numberField(this.page).fill("66");
    await expect(ClientPageLegalLocators.blockLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.blockField(this.page).fill("2");
    await expect(
      ClientPageLegalLocators.entranceLabel(this.page)
    ).toBeVisible();
    await ClientPageLegalLocators.entranceField(this.page).fill("3");
    await expect(
      ClientPageLegalLocators.apartmentLabel(this.page)
    ).toBeVisible();
    await ClientPageLegalLocators.apartmentField(this.page).fill("15");
    await expect(ClientPageLegalLocators.floorLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.floorField(this.page).fill("4");
    await expect(ClientPageLegalLocators.mobileLabel(this.page)).toBeVisible;
    await ClientPageLegalLocators.mobileField(this.page).fill("0740562978");
    await expect(ClientPageLegalLocators.emailLabel(this.page)).toBeVisible();
    await ClientPageLegalLocators.emailField(this.page).fill(
      "markoPWtest@greco.com"
    );
    await expect(ClientPageLegalLocators.nextButton(this.page)).toBeVisible();
    await ClientPageLegalLocators.nextButton(this.page).click();
  }
}
