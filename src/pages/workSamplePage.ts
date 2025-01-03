import { Page } from "@playwright/test";

export class WorkSamplePage {
    constructor(public page: Page) {
    }

    public get emailInput() {
        return this.page.locator('#form_item_email');
    }

    public get lastNameInput() {
        return this.page.locator('#form_item_lastName');
    }

    public get firstNameInput() {
        return this.page.locator('#form_item_firstName');
    }

    public get infoSourceDropdownList() {
        return this.page.locator('div.ant-select-selector');
    }

    public get infoSourceOptions() {
        return this.page.locator('div.ant-select-item-option-content');
    }

    public get servicesOfInterestCheckboxes() {
        return this.page.locator('label.ant-checkbox-wrapper');
    }

    public get typeOfAssociationRadioButton() {
        return this.page.locator('label.ant-radio-wrapper');
    }

    public get explanationTextarea() {
        return this.page.locator('#form_item_explanation');
    }

    public get submitFormButton() {
        return this.page.locator('button[type="submit"]');
    }

    public get successMessage() {
        return this.page.locator('div.ant-alert-message');
    }

    public get errorMessage() {
        return this.page.locator('div.ant-form-item-explain-error');
    }
}