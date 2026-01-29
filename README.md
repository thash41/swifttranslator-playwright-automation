# SwiftTranslator Playwright Automation Project

## Student Information
- Student ID: IT23315600
- Name: Thashmila P.H.J
- Module: IT3040 – ITPM
- Assignment: Assignment 1
- System Tested: SwiftTranslator (Singlish to Sinhala)
- Automation Tool: Playwright

---

## Project Description

This project contains automated functional and UI test cases for the SwiftTranslator web application  
(https://www.swifttranslator.com/) which converts Singlish input into Sinhala output.

The automation was implemented using Playwright according to the assignment requirements.

The test cases include:
- Positive functional scenarios
- Negative functional scenarios
- One UI-related scenario (real-time output update)

All test cases are data-driven using a JSON file and executed automatically.

---

## Technologies Used

- Node.js
- Playwright
- TypeScript
- JSON (for test data)




---

## To execute all tests using Chromium browser:
- npx playwright test --project=chromium

## To run tests with visible browser:
- npx playwright test --project=chromium --headed

## View Test Execution Report
- npx playwright show-report

## Test cases are stored in:   
- test-data/testcases.json


## How to Install

Follow the steps below to install the project dependencies:

1. Open a terminal inside the project folder.

2. Run the following command to install required packages:

```bash
-npm install

