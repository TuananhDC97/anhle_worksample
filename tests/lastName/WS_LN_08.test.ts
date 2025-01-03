import { expect, test } from '../../src/utils/fixtures';
import Constants from '../../src/utils/constants';
import { getTestData } from '../../src/utils/dataConfig';

const testData = getTestData('lastName/WS_LN_08.json');

test('WS_LN_08 - Check input last name have very long last name (assume 200 words)', {
    tag: [
        Constants.LAST_NAME_TAG
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
        typeOfAssociation,
        explanation } = testData;

    await commonFunctions.goToBaseURL();
    await workSampleFunctions.inputEmail(email);
    await workSampleFunctions.inputLastName(lastName);
    await workSampleFunctions.inputFistName(firstName);
    await workSampleFunctions.chooseInfoSource(infoSource);
    await workSampleFunctions.chooseServicesOfInterest(servicesOfInterest);
    await workSampleFunctions.chooseTypeOfAssociation(typeOfAssociation);
    await workSampleFunctions.inputExplanation(explanation);
    await workSampleFunctions.clickSubmitButton();
    await expect(workSamplePage.successMessage).toBeVisible();
    await expect(workSamplePage.successMessage).toHaveText(Constants.SUCCESS_MESSAGE);
})