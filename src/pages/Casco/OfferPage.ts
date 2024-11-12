import { Page, expect } from "@playwright/test";
import { OfferPageLocators } from "../../locators/casco/Offer";

export class OfferPageCasco {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async offerPageCasco() {
    await OfferPageLocators.generaliCheckbox(this.page).check();
    await OfferPageLocators.uniqaCheckbox(this.page).check();
    await expect(OfferPageLocators.createOfferButton(this.page)).toBeVisible();
    await OfferPageLocators.createOfferButton(this.page).click();

    const maxWaitTime = 60000;
    const checkInterval = 1000;
    let elapsedTime = 0;

    while (elapsedTime < maxWaitTime) {
      if (await this.page.locator('button:has-text("GAP offer")').isVisible()) {
        break;
      }
      await this.page.waitForTimeout(checkInterval);
      elapsedTime += checkInterval;
    }

    if (elapsedTime >= maxWaitTime) {
      throw new Error("Offer is not created.");
    }

    const offerIdNumber = await this.page.locator("#input_readonly_offerId");
    const offerIdValue = await offerIdNumber.textContent();
    console.log("Offer ID Number:", offerIdValue?.trim());
  }
}

