import { expect, test } from '../../src/utils/fixtures';
import { getTestData } from '../../src/utils/dataConfig';
import Constants from '../../src/utils/constants';

const testData = getTestData('explanation/WS_EXP_02.json');

test('WS_EXP_02 - Check submit form have long explanation(assume 2000 words)', {
    tag: [
        Constants.EXPLANATION_TAG
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
