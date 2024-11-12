import { Page } from "@playwright/test";
export const OfferPageLocators = {
  generaliCheckbox: (page: Page) => page.locator('label.ms-Checkbox-label i[data-icon-name="CheckMark"]').nth(4),
  uniqaCheckbox: (page: Page) => page.locator('label.ms-Checkbox-label i[data-icon-name="CheckMark"]').nth(5),
  createOfferButton:(page:Page)=>page.locator('button:has-text("Create Offer")'),
};
