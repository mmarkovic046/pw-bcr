import { Page, expect } from "@playwright/test";
import { LoginLocators } from "../locators/loginLocators";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await LoginLocators.emailInput(this.page).fill(email);
    await LoginLocators.nextButton(this.page).click();
    await LoginLocators.passwordInput(this.page).fill(password);
    await LoginLocators.signInButton(this.page).click();
    await LoginLocators.noButton(this.page).click();
  
  }
  async verifySuccessfulLogin() {
    await expect(this.page.getByText("BCR Leasing")).toBeVisible();
    await expect(this.page.getByRole("banner")).toContainText("BCR Leasing");
  }
}
