import { Page, expect } from "@playwright/test";
import { GeneralPageIndividualLocators } from "../../locators/casco/General";
import { GeneralPageLegalLocators } from "../../locators/casco/General";
import { getTodayDate } from "../../utils/todayDate";

export class GeneralPageCasco {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async generalPageIndividual() {
    await expect(
      GeneralPageIndividualLocators.typeOfPersonLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.typeOfPersonField(
      this.page
    ).selectOption("bcr.PersonType.CIVIL");
    await expect(
      GeneralPageIndividualLocators.contractTypeLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.contractTypeField(
      this.page
    ).selectOption("bcr.Vehicle.CONTRACT_TYPE_CREDIT_CONTRACT");
    await expect(
      GeneralPageIndividualLocators.contractCurrencyLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.contractCurrencyField(
      this.page
    ).selectOption("bcr.Vehicle.CONTRACT_CURRENCY_EUR");
    await expect(
      GeneralPageIndividualLocators.valueForLeasingLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.valueForLeasingField(this.page).fill(
      "15000"
    );
    await expect(
      GeneralPageIndividualLocators.leasingPeriodLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.leasingPeriodField(this.page).fill(
      "12"
    );
    await expect(
      GeneralPageIndividualLocators.contractLeasingDateLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.contractLeasingDateField(
      this.page
    ).fill(getTodayDate());
    await expect(
      GeneralPageIndividualLocators.paymentMethodLabel(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.paymentMethodField(
      this.page
    ).selectOption("bcr.Vehicle.PAYMENT_METHOD_ANNUALLY");
    await expect(
      GeneralPageIndividualLocators.nextButton(this.page)
    ).toBeVisible();
    await GeneralPageIndividualLocators.nextButton(this.page).click();
  }

  async generalPageLegal() {
    await expect(
      GeneralPageLegalLocators.typeOfPersonLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.typeOfPersonField(this.page).selectOption(
      "bcr.PersonType.LEGAL"
    );
    await expect(
      GeneralPageLegalLocators.contractTypeLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.contractTypeField(this.page).selectOption(
      "bcr.Vehicle.CONTRACT_TYPE_CREDIT_CONTRACT"
    );
    await expect(
      GeneralPageLegalLocators.contractCurrencyLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.contractCurrencyField(
      this.page
    ).selectOption("bcr.Vehicle.CONTRACT_CURRENCY_EUR");
    await expect(
      GeneralPageLegalLocators.valueForLeasingLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.valueForLeasingField(this.page).fill(
      "15000"
    );
    await expect(
      GeneralPageLegalLocators.leasingPeriodLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.leasingPeriodField(this.page).fill("12");
    await expect(
      GeneralPageLegalLocators.contractLeasingDateLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.contractLeasingDateField(this.page).fill(
      getTodayDate()
    );
    await expect(
      GeneralPageLegalLocators.paymentMethodLabel(this.page)
    ).toBeVisible();
    await GeneralPageLegalLocators.paymentMethodField(this.page).selectOption(
      "bcr.Vehicle.PAYMENT_METHOD_ANNUALLY"
    );
    await expect(GeneralPageLegalLocators.nextButton(this.page)).toBeVisible();
    await GeneralPageLegalLocators.nextButton(this.page).click();
  }
}
