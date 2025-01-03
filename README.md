# AnhLe: Playwright End to End Automation Tests
# Introduction
This is a sample project of Anh Le to apply on RakSul's Automation QA position.
Also this is test case design: https://docs.google.com/spreadsheets/d/1J4Ox8H7YNJBLmkVvFrPUeabgUmx7a6AB/edit?usp=sharing&ouid=109965341384140784685&rtpof=true&sd=true
using:
- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

## 🤖 Setup
Pre-condition: Already installed NodeJS, if not please download here: https://nodejs.org/en/download
1. Enable Powershell script execution(skip this step if you already enabled): `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
2. Install the dependencies using `npm ci` or `yarn install --frozen-lockfile`
3. Install Playwright: `npx playwright install`
4. Playwright is ready to use now, let's move to the Usage part for more details

## 📁 Structure

```sh
 |- src # source files:
 |- |- data # for store json test data
 |- |- files # for test files that need to upload on specific test cases
 |- |- functions # for functions, methods that use in specific web page
 |- |- pages # for page objects, apply POM
 |- |- utils # for utilities
 |- tests # for automation test scripts
 |- playwright-report # store automation execution report
```

## 🔨 Usage

1. To run all test: `npx playwright test`

2. To open Playwright UI Mode: `npx playwright test --ui`

3. To run specific test by tag: `npx playwright test --grep "@{tag}"` 
ex: run all test cases have user tag: `npx playwright test --grep "@email"`

4. To run specific test by test name: `npx playwright test --grep "{name}"`
ex: run all test cases have user tag: `npx playwright test --grep "WS_01"` (exact or contains are acceptable)

5. To run headed mode: `npx playwright test --headed`

6. To run in specific browser: `npx playwright test --project {browser}` (all is default, includes chromium, firefox, webkit)

7. To open report of last run: `npx playwright show-report playwright-report/{report folder name}`
ex: `npx playwright show-report playwright-report/Automation_Execution_Report_31.10.2024_16.23.17`
You could find the report folder name in the "playwright-report" folder after running the test

## 🎬 License
AnhLe © 2025