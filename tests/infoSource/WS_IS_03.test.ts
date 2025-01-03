import { expect, test } from '../../src/utils/fixtures';
import { getTestData } from '../../src/utils/dataConfig';
import Constants from '../../src/utils/constants';

const testData = getTestData('infoSource/WS_IS_03.json');

test('WS_IS_03 - Check select Where did you hear about us option: Recommend by friend', {
    tag: [
        Constants.INFO_SOURCE_TAG
    ]
}, async ({
    workSamplePage,
    workSampleFunctions,
    commonFunctions,
}) => {
    const { email,
        lastName,
        firstName,
        servicesOfInterest,
        infoSource,
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