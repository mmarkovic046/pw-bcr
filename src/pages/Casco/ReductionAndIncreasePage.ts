import { expect, Page } from "@playwright/test";
import { ReductionAndIncreasePageLocators } from "../../locators/casco/ReductionIncrease";

export class ReductionAndIncreasePageCasco {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async reductionTabCasco() {
    await expect(
      ReductionAndIncreasePageLocators.discountLabel(this.page)
    ).toBeVisible();
    await expect(
      ReductionAndIncreasePageLocators.increaseLabel(this.page)
    ).toBeVisible();
    await expect(
      ReductionAndIncreasePageLocators.insurerLabel(this.page)
    ).toBeVisible();
    await ReductionAndIncreasePageLocators.discountField(this.page).fill("2");
    await expect(
      ReductionAndIncreasePageLocators.increaseLabel(this.page)
    ).toBeHidden();
    await ReductionAndIncreasePageLocators.insurerField(this.page).selectOption(
      "Omniasig"
    );
    await expect(
      ReductionAndIncreasePageLocators.nextButton(this.page)
    ).toBeVisible();
    await ReductionAndIncreasePageLocators.nextButton(this.page).click();
  }
}
