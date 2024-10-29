# Kadromierz E2E Testing Project

This project is set up to run end-to-end (E2E) tests using Cypress. It includes configurations for ESLint, Prettier, and TypeScript.


## Setup

1. Clone the repository.
2. Install dependencies:
    ` npm ci `


## Running Tests

To run the Cypress tests, use the following script:
 ` npm run cy:open `

To create mocha reports, use the following script:
 ` npm run create:reports `


 ## Additional info
 
 ### Config.ts

 The `config.ts` file contains the configuration settings for the tests:

 `ENV` - variables like login credentials and deleting word confirmation

 `baseUrl` - url linked to the Kadromierz App login page

 ### Page Object Model

 Test are organized using the Page Object Model (POM) pattern. The page objects are defined in the `pages` directory.

 ### Mochawesome reports

 Installed `mochawesome-reports` to create Mocha reports which are stored in `cypress/results` folder and includes:
 
 `combined` - merged single files into kadromierz.json

 `htmls_reports` - generated report.html file

 `json_reports` - single mochawesome.json reports from each test

### Screenshots with failed tests

Screenshots with failed tests are stored in `cypress/screenshots`

 ### XLS file testing

 Template file is stored in folder `cypress/test_data/excel_templates`

 Downloaded file are stored in folder `cypress/downloads`



