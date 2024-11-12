import { Page } from "@playwright/test";

export const ClientPageIndividualLocators = {
  //LABELS
  personalNumercalCodeLabel: (page: Page) =>
    page.locator("text=Personal numerical code*"),
  lastNameLabel: (page: Page) => page.locator("text=Last name*"),
  firstNameLabel: (page: Page) => page.locator("text=First name*"),
  countryLabel: (page: Page) => page.locator("text=County*"),
  townLabel: (page: Page) => page.locator("text=Town*"),
  streetLabel: (page: Page) => page.locator("text=Street*"),
  numberLabel: (page: Page) => page.locator("text=Number*"),
  blockLabel: (page: Page) => page.locator("text=Block"),
  entranceLabel: (page: Page) => page.locator("text=Entrance"),
  apartmentLabel: (page: Page) => page.locator("text=Apartment"),
  floorLabel: (page: Page) => page.locator("text=Floor"),
  mobileLabel: (page: Page) => page.locator("text=MObile*"),
  emailLabel: (page: Page) => page.locator("text=E-mail*"),
  //FIELDS
  personalNumericalCodeField: (page: Page) =>
    page.locator("#input_inp_lessee_compreg"),
  lastNameField: (page: Page) => page.locator("#input_inp_lessee_lastname"),
  firstNameField: (page: Page) => page.locator("#input_inp_lessee_firstname"),
  counrtyField: (page: Page) => page.locator("#inp_lessee_county"),
  townField: (page: Page) => page.locator("#inp_lessee_city"),
  streetField: (page: Page) => page.locator("#input_inp_lessee_street"),
  numberField: (page: Page) => page.locator("#input_inp_lessee_housenr"),
  blockField: (page: Page) => page.locator("#input_inp_lessee_building"),
  entranceField: (page: Page) => page.locator("#input_inp_lessee_entrance"),
  apartmentField: (page: Page) => page.locator("#input_inp_lessee_door"),
  floorField: (page: Page) => page.locator("#input_inp_lessee_floor"),
  mobileField: (page: Page) => page.locator("#input_inp_lessee_mobile"),
  emailField: (page: Page) => page.locator("#input_inp_lessee_email"),
  nextButton: (page: Page) => page.locator("text=Next"),
};

export const ClientPageLegalLocators = {
  //LABELS
  umiqueRegistrtationCodeLabel: (page: Page) =>
    page.locator("text=Unique registration code*"),
  CompanyNameLabel: (page: Page) => page.locator("text=Company Name*"),
  caenCodeLabel: (page: Page) => page.locator("text=CAEN code"),
  countryLabel: (page: Page) => page.locator("text=County*"),
  townLabel: (page: Page) => page.locator("text=Town*"),
  streetLabel: (page: Page) => page.locator("text=Street*"),
  numberLabel: (page: Page) => page.locator("text=Number*"),
  blockLabel: (page: Page) => page.locator("text=Block"),
  entranceLabel: (page: Page) => page.locator("text=Entrance"),
  apartmentLabel: (page: Page) => page.locator("text=Apartment"),
  floorLabel: (page: Page) => page.locator("text=Floor"),
  mobileLabel: (page: Page) => page.locator("text=MObile*"),
  emailLabel: (page: Page) => page.locator("text=E-mail*"),
  //FIELDS
  umiqueRegistrtationCodeField: (page: Page) =>
    page.locator("#input_inp_lessee_uid"),
  CompanyNameField: (page: Page) =>
    page.locator("#input_inp_lessee_company_name"),
  caenCodeField: (page: Page) => page.locator("#input_inp_caen"),
  counrtyField: (page: Page) => page.locator("#inp_lessee_county"),
  townField: (page: Page) => page.locator("#inp_lessee_city"),
  streetField: (page: Page) => page.locator("#input_inp_lessee_street"),
  numberField: (page: Page) => page.locator("#input_inp_lessee_housenr"),
  blockField: (page: Page) => page.locator("#input_inp_lessee_building"),
  entranceField: (page: Page) => page.locator("#input_inp_lessee_entrance"),
  apartmentField: (page: Page) => page.locator("#input_inp_lessee_door"),
  floorField: (page: Page) => page.locator("#input_inp_lessee_floor"),
  mobileField: (page: Page) => page.locator("#input_inp_lessee_mobile"),
  emailField: (page: Page) => page.locator("#input_inp_lessee_email"),
  nextButton: (page: Page) => page.locator("text=Next"),
};
