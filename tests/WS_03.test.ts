import { expect, test } from '../src/utils/fixtures';
import Constants from '../src/utils/constants';


test('WS_03 - Check submit form with not input or select any fields', {
    tag: [
        Constants.FULL_FLOW_TAG
    ]
}, async ({
    workSamplePage,
    workSampleFunctions,
    commonFunctions,
}) => {
    await commonFunctions.goToBaseURL();
    await workSampleFunctions.clickSubmitButton();
    const allErrorMessage = await workSamplePage.errorMessage.all();
    expect(allErrorMessage).toHaveLength(Constants.FIELDS.length);
    for (const [index, element] of allErrorMessage.entries()) {
        await expect(element).toHaveText(`'${Constants.FIELDS[index]}' is required`);
    }
})
