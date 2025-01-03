import { expect, test } from '../../src/utils/fixtures';
import { getTestData } from '../../src/utils/dataConfig';
import Constants from '../../src/utils/constants';

const testData = getTestData('typeOfAssociation/WS_TOA_01.json');

test('WS_TOA_01 - Check submit form with all valid values on all required fields except select Type of Association', {
    tag: [
        Constants.TYPE_OF_ASSOCIATION_TAG
    ]
}, async ({
    workSamplePage,
    workSampleFunctions,
    commonFunctions,
}) => {
    const { email,
        lastName,
        firstName,
        infoSource,
        servicesOfInterest,
        explanation } = testData;

    await commonFunctions.goToBaseURL();
    await workSampleFunctions.inputEmail(email);
    await workSampleFunctions.inputLastName(lastName);
    await workSampleFunctions.inputFistName(firstName);
    await workSampleFunctions.chooseInfoSource(infoSource);
    await workSampleFunctions.chooseServicesOfInterest(servicesOfInterest);
    await workSampleFunctions.inputExplanation(explanation);
    await workSampleFunctions.clickSubmitButton();
    await expect(workSamplePage.errorMessage).toBeVisible();
    await expect(workSamplePage.errorMessage).toHaveText("'typeOfAssociation' is required");
})
