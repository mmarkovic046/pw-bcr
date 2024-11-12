import { Page } from "@playwright/test";

export const GeneralPageIndividualLocators = {
  typeOfPersonLabel: (page: Page) => page.getByText("Type of person*"),
  typeOfPersonField: (page: Page) => page.locator("#inp_lessee_type"),
  contractTypeLabel: (page: Page) => page.getByText("Contract type*"),
  contractTypeField: (page: Page) => page.locator("#inp_contract_type"),
  contractCurrencyLabel: (page: Page) => page.getByText("Contract currency*"),
  contractCurrencyField: (page: Page) => page.locator("#inp_policy_currency"),
  valueForLeasingLabel: (page: Page) => page.getByText("Value for leasing"),
  valueForLeasingField: (page: Page) => page.locator("#input_inp_policy_value"),
  leasingPeriodLabel: (page: Page) =>
    page.getByText("Leasing period (months)*"),
  leasingPeriodField: (page: Page) =>
    page.locator("#input_inp_leasing_monthsinterval"),
  contractLeasingDateLabel: (page: Page) =>
    page.getByText("Contract leasing date*"),
  contractLeasingDateField: (page: Page) =>
    page.locator("#datepicker_inp_external_contractdate"),
  paymentMethodLabel: (page: Page) => page.getByText("Payment method*"),
  paymentMethodField: (page: Page) => page.locator("#inp_policy_payment"),
  nextButton: (page: Page) => page.getByRole("button", { name: "Next" }),
};

export const GeneralPageLegalLocators = {
  typeOfPersonLabel: (page: Page) => page.getByText("Type of person*"),
  typeOfPersonField: (page: Page) => page.locator("#inp_lessee_type"),
  contractTypeLabel: (page: Page) => page.getByText("Contract type*"),
  contractTypeField: (page: Page) => page.locator("#inp_contract_type"),
  contractCurrencyLabel: (page: Page) => page.getByText("Contract currency*"),
  contractCurrencyField: (page: Page) => page.locator("#inp_policy_currency"),
  valueForLeasingLabel: (page: Page) => page.getByText("Value for leasing"),
  valueForLeasingField: (page: Page) => page.locator("#input_inp_policy_value"),
  leasingPeriodLabel: (page: Page) =>
    page.getByText("Leasing period (months)*"),
  leasingPeriodField: (page: Page) =>
    page.locator("#input_inp_leasing_monthsinterval"),
  contractLeasingDateLabel: (page: Page) =>
    page.getByText("Contract leasing date*"),
  contractLeasingDateField: (page: Page) =>
    page.locator("#datepicker_inp_external_contractdate"),
  paymentMethodLabel: (page: Page) => page.getByText("Payment method*"),
  paymentMethodField: (page: Page) => page.locator("#inp_policy_payment"),
  nextButton: (page: Page) => page.getByRole("button", { name: "Next" }),
};
