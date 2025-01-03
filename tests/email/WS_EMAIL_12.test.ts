import { expect, test } from '../../src/utils/fixtures';
import Constants from '../../src/utils/constants';
import { getTestData } from '../../src/utils/dataConfig';

const testData = getTestData('email/WS_EMAIL_12.json');

test('WS_EMAIL_12 - Check input invalid email format: Not have top level domain', {
    tag: [
        Constants.EMAIL_TAG
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
    await expect(workSamplePage.errorMessage).toHaveText("'email' is not a valid email");
})