import { Page } from "@playwright/test";
import CommonFunctions from "./commonFunctions";
import { WorkSamplePage } from "../pages/workSamplePage";

export default class WorkSampleFunctions extends WorkSamplePage {
    commonFunctions: CommonFunctions;

    constructor(public page: Page) {
        super(page);
        this.commonFunctions = new CommonFunctions(this.page);
    }

    /**
     * Input first name
     * @param firstName first name to input
     */
    public async inputFistName(firstName: string) {
        await this.commonFunctions.inputTextOnElement(this.firstNameInput, firstName);
    }

    /**
     * Input last name
     * @param lastName last name to input
     */
    public async inputLastName(lastName: string) {
        await this.commonFunctions.inputTextOnElement(this.lastNameInput, lastName);
    }

    /**
     * Input email
     * @param email email to input
     */
    public async inputEmail(email: string) {
        await this.commonFunctions.inputTextOnElement(this.emailInput, email);
    }

    /**
     * Choose the given option from the info source dropdown list
     * @param infoSource option to choose
     */
    public async chooseInfoSource(infoSource: string) {
        await this.commonFunctions.clickOnElement(this.infoSourceDropdownList);
        await this.commonFunctions.clickOnElement(this.infoSourceOptions.filter({ hasText: infoSource }));
    }

    /**
     * Choose the given options from the services of interest checkboxes
     * @param servicesOfInterest options to choose
     */
    public async chooseServicesOfInterest(servicesOfInterest: string[]) {
        for (const service of servicesOfInterest) {
            await this.commonFunctions.clickOnElement(this.servicesOfInterestCheckboxes.filter({ hasText: service }));
        }
    }

    /**
     * Choose the given option from the type of association radio buttons
     * @param typeOfAssociation option to choose
     */
    public async chooseTypeOfAssociation(typeOfAssociation: string) {
            await this.commonFunctions.clickOnElement(this.typeOfAssociationRadioButton.filter({ hasText: typeOfAssociation }));
    }

    /**
     * Input explanation
     * @param explanation explanation to input
     */
    public async inputExplanation(explanation: string) {
        await this.commonFunctions.inputTextOnElement(this.explanationTextarea, explanation);
    }

    /**
     * Click the submit button
     */
    public async clickSubmitButton() {
        await this.commonFunctions.clickOnElement(this.submitFormButton);
    }
}
