import { Page } from "@playwright/test";

export const VehiclePageLocators = {
  vinLabel: (page: Page) => page.getByText("VIN*"),
  vinField: (page: Page) => page.locator("#input_inp_vehicle_vin"),
  vehicleBrandLabel: (page: Page) => page.getByText("Vehicle Brand*"),
  vehicleBrandField: (page: Page) => page.locator("#inp_vehicle_brand"),
  vehicleModelLabel: (page: Page) => page.getByText("Vehicle Model*"),
  vehicleModelField: (page: Page) => page.locator("#input_inp_vehicle_model"),
  fuelTypeLabel: (page: Page) => page.getByText("Fuel type*"),
  fuelTypeField: (page: Page) => page.locator("#inp_vehicle_fuel"),
  maxMassAuthorizedLabel: (page: Page) =>
    page.getByText("Max. mass authorized (kg)*"),
  maxMassAuthorizedField: (page: Page) =>
    page.locator("#input_inp_vehicle_maximumgrossweight"),
  noSeatsLabel: (page: Page) => page.getByText("No. seats*"),
  noSeats: (page: Page) => page.locator("#input_inp_vehicle_places"),
  powerKwLabelField: (page: Page) => page.getByText("Power (kW)*"),
  powerKw: (page: Page) => page.locator("#input_inp_vehicle_kw"),
  cubicCapacityLabel: (page: Page) => page.getByText("Cubic capacity*"),
  cubicCapacituField: (page: Page) =>
    page.locator("#input_inp_vehicle_cubiccapacity"),
  categoryLabel: (page: Page) => page.getByText("Category*"),
  categoryField: (page: Page) => page.locator("#inp_vehicle_category"),
  subcategoryLabel: (page: Page) => page.getByText("Subcategory"),
  subcategoryField: (page: Page) => page.locator("#inp_vehicle_subcategory"),
  manufacturingYearLabel: (page: Page) => page.getByText("Manufacturing year*"),
  manufacturingYearField: (page: Page) =>
    page.locator("#inp_vehicle_construction"),
  firstYearOdRegistrationLabel: (page: Page) =>
    page.getByText("First year of registration*"),
  firstYearOfRegistrationField: (page: Page) =>
    page.locator("#inp_vehicle_firstreg"),
  vehicleConditionLabel: (page: Page) => page.getByText("Vehicle condition*"),
  vehicleConditioField: (page: Page) => page.locator("#inp_vehicle_state"),
  vehicleUseLabel: (page: Page) => page.getByText("Vehicle use*"),
  vehicleUseField: (page: Page) => page.locator("#inp_vehicle_carusage"),
  fleetLabel: (page: Page) => page.getByText("Fleet*"),
  fleetField: (page: Page) => page.locator("#inp_vehicle_fleet"),
  registrationExparisonDateLabel: (page: Page) =>
    page.getByText("Registration Expiration date ITP MTPL"),
  registrationExparisonDatePicker: (page: Page) =>
    page.locator("#datepicker_inp_vehicle_registration_expiration_date"),
  nextButton: (page: Page) => page.getByRole("button", { name: "Next" }),
};
