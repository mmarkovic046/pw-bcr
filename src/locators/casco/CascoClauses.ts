import { Page } from "@playwright/test";

export const CascoClausesPageLocators = {
  strikesRiotsCivilDisturbancesLabel: (page: Page) =>
    page.locator("text=Strikes, riots, civil disturbances"),
  strikesRiotsCivilDisturbancesRadioButton: (page: Page) => page.locator("#radio_avarie7_yes"),
  workInstallationLabel: (page: Page) => page.locator("text=Work installation"),
  workInstallationRadioButton: (page: Page) => page.locator("#radio_avarie2_yes"),
  damageCausedByTransportLabel: (page: Page) => page.locator("text=Damage caused by transp."),
  damageCausedByTransportRadioButton: (page: Page) => page.locator("#radio_avarie3_yes"),
  loadingOfGoodsLabel: (page: Page) =>
    page.locator("text=Loading/unloading of goods"),
  loadingOfGoodsRadioButton: (page: Page) => page.locator("#radio_avarie5_yes"),
  tiresRimasLabel: (page: Page) => page.locator("text=Tires / Rims"),
  territorialExpansionLabel: (page: Page) => page.locator("text=Territorial expansion"),
  extensionLabel: (page: Page) => page.locator("text=Extension (ERS)"),
  carriersLabel: (page: Page) => page.locator("text=Carriers"),
  nextButton: (page: Page) => page.getByRole("button", { name: "Next" }),
};
