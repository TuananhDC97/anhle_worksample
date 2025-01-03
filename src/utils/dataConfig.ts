import { TestData } from './testDataInterface';

export function getTestData(filePath: string): TestData {
    const testDataJson = require(`../data/${filePath}`);
    return testDataJson as TestData;
}
