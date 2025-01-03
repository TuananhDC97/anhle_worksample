import { expect, test } from '../../src/utils/fixtures';
import Constants from '../../src/utils/constants';
import { getTestData } from '../../src/utils/dataConfig';

const testData = getTestData('lastName/WS_LN_05.json');

test('WS_LN_05 - Check not input last name', {
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
    await expect(workSamplePage.errorMessage).toBeVisible();
    await expect(workSamplePage.errorMessage).toHaveText("'lastName' is required");
})