import { Page } from "@playwright/test";

export class PageObjects {
  readonly page: Page;

  private newOfferButtonSelector = { name: "New offer" };
  private cascoTextSelector = "CASCO";

  constructor(page: Page) {
    this.page = page;
  }

  async newOfferCascoPage() {
    await this.page.getByRole("button", this.newOfferButtonSelector).click();
    await this.page.getByText(this.cascoTextSelector, { exact: true }).click();
  }
}
