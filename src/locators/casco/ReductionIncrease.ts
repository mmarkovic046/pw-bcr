import { Page } from "@playwright/test";

export const ReductionAndIncreasePageLocators = {
  discountLabel: (page: Page) => page.locator("text=Discount (%)"),
  increaseLabel: (page: Page) => page.locator("text=Increase (%)"),
  insurerLabel: (page: Page) =>
    page.locator("text=Insurer (Reduction/Increase)"),
  discountField: (page: Page) => page.locator("#input_inp_discount_p"),
  increaseField: (page: Page) => page.locator("#input_inp_increase_p"),
  insurerField: (page: Page) => page.locator("#inp_discount_insurer"),
  nextButton: (page: Page) => page.getByText("Next"),
};
