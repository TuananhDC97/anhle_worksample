import { Page } from "@playwright/test";
import Constants from "../utils/constants";

export default class CommonFunctions {
    constructor(public page: Page) {
    }

    /**
     * Goes to the given url.
     * @param url The url to go to.
     */
    public async goToUrl(url: string) {
        await this.page.goto(url);
    }

    /**
     * Clicks on the given element using playwright's click.
     * @param element The element to be clicked.
     * @param force Whether to force the click.
     */
    public async clickOnElement(element: any, force = false) {
        await element.click({ force: force });
    }

    /**
     * Fills the given element with the given text using playwright's fill.
     * @param element The element to be filled.
     * @param text The text to be filled in the element.
     */
    public async inputTextOnElement(element: any, text: string, force = false) {
        await element.clear();
        await element.fill(text, { force: force });
    }

    /**
    * Goes to the base url
    */
    public async goToBaseURL() {
        await this.goToUrl(Constants.BASE_URL);
        await this.page.waitForURL(Constants.BASE_URL, { timeout: 5000 }); // Wait for the specific URL
    }
}
