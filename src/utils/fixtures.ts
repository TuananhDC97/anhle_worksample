import { test as baseTest, BrowserContext, Page } from '@playwright/test';
import { WorkSamplePage } from '../pages/workSamplePage';
import WorkSampleFunctions from '../functions/workSampleFunctions';
import CommonFunctions from '../functions/commonFunctions';
type CustomFixtures = {
    //Page
    workSamplePage: WorkSamplePage,

    //Functions
    workSampleFunctions: WorkSampleFunctions,
    commonFunctions: CommonFunctions
};

export const test = baseTest.extend<CustomFixtures>({
    workSamplePage: async ({ page }, use) => {
        const workSamplePage = new WorkSamplePage(page);
        await use(workSamplePage);
    },

    workSampleFunctions: async ({ page }, use) => {
        const workSampleFunctions = new WorkSampleFunctions(page);
        await use(workSampleFunctions);
    },

    commonFunctions: async ({ page }, use) => {
        const commonFunctions = new CommonFunctions(page);
        await use(commonFunctions);
    }
});

export const expect = test.expect;

export type { Page };

export type { BrowserContext };