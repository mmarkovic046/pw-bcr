import { Page, expect } from "@playwright/test";
import { VehiclePageLocators } from "../../locators/casco/Vehicle";
import { getTodayDate } from "../../utils/todayDate";

export class VehiclePageCasco {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async vehiclePageCasco() {
    await expect(VehiclePageLocators.vinLabel(this.page)).toBeVisible();
    await VehiclePageLocators.vinField(this.page).fill("WAUZZZF83LN002179");
    await expect(VehiclePageLocators.vehicleBrandLabel(this.page)).toBeVisible;
    await VehiclePageLocators.vehicleBrandField(this.page).selectOption(
      "bcr.Vehicle.TYPE_FORD"
    ),
      await expect(
        VehiclePageLocators.vehicleModelLabel(this.page)
      ).toBeVisible();
    await VehiclePageLocators.vehicleModelField(this.page).fill("Mustang"),
      await expect(VehiclePageLocators.fuelTypeLabel(this.page)).toBeVisible();
    await VehiclePageLocators.fuelTypeField(this.page).selectOption(
      "bcr.Vehicle.FUEL_BENZINE"
    );
    await expect(
      VehiclePageLocators.maxMassAuthorizedLabel(this.page)
    ).toBeVisible();
    await VehiclePageLocators.maxMassAuthorizedField(this.page).fill("1650");
    await expect(VehiclePageLocators.noSeatsLabel(this.page)).toBeVisible();
    await VehiclePageLocators.noSeats(this.page).fill("5");
    await expect(VehiclePageLocators.powerKwLabelField(this.page)).toBeVisible;
    await VehiclePageLocators.powerKw(this.page).fill("145");
    await expect(
      VehiclePageLocators.cubicCapacityLabel(this.page)
    ).toBeVisible();
    await VehiclePageLocators.cubicCapacituField(this.page).fill("2998");
    await expect(VehiclePageLocators.categoryLabel(this.page)).toBeVisible();
    await VehiclePageLocators.categoryField(this.page).selectOption(
      "bcr.Category.COMERCIAL"
    );
    await expect(VehiclePageLocators.subcategoryField(this.page)).toBeVisible();
    await VehiclePageLocators.subcategoryField(this.page).selectOption(
      "bcr.SubCategory.VAN"
    ),
      await expect(
        VehiclePageLocators.manufacturingYearLabel(this.page)
      ).toBeVisible();
    await VehiclePageLocators.manufacturingYearField(this.page).selectOption(
      "2020"
    );
    await expect(
      VehiclePageLocators.firstYearOdRegistrationLabel(this.page)
    ).toBeVisible();
    await VehiclePageLocators.firstYearOfRegistrationField(
      this.page
    ).selectOption("2023");
    await expect(
      VehiclePageLocators.vehicleConditionLabel(this.page)
    ).toBeVisible();
    await VehiclePageLocators.vehicleConditioField(this.page).selectOption(
      "bcr.Vehicle.NEW"
    );
    await expect(VehiclePageLocators.vehicleUseLabel(this.page)).toBeVisible();
    await VehiclePageLocators.vehicleUseField(this.page).selectOption(
      "bcr.Vehicle.USE_DRIVE_TEST"
    );
    await expect(VehiclePageLocators.fleetLabel(this.page)).toBeVisible(),
      await VehiclePageLocators.fleetField(this.page).selectOption(
        "bcr.Vehicle.CAR_FLEET_BETWEEN_0-4"
      );
    await expect(
      VehiclePageLocators.registrationExparisonDateLabel(this.page)
    ).toBeVisible();
    await VehiclePageLocators.registrationExparisonDatePicker(this.page).fill(
      getTodayDate()
    );
    await expect(VehiclePageLocators.nextButton(this.page)).toBeVisible();
    await VehiclePageLocators.nextButton(this.page).click();
  }
}
