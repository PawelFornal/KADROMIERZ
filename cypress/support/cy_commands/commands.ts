
import { loginPage } from "cypress/support/selectors/loginPage";
import { DropdownSelectOptions } from "../interfaces/IAbsenceRequests";
import { cookiesAcceptButton, cookiesBanner } from "../selectors/cookies";
import { ReportName } from "../test_data";
import { compareExcelFiles } from "../utils/compareExcelFiles";
import { dropdownHelper } from "../utils/dropdownList";
import { reportsFinder } from "../utils/reportsFinder";


Cypress.Commands.add('acceptCookies', () => {
    cy.get(cookiesBanner).then($banner => {
        if ($banner.is(':visible')) {
            cy.get(cookiesAcceptButton)
                .click({ force: true })
                .then(() => {
                    cy.get(cookiesBanner).should('not.be.visible');
                });
        }
    });
});

Cypress.Commands.add('login', (login, password) => {
    cy.visit('');
    cy.acceptCookies()
    cy.get(loginPage.loginField).type(login, { force: true });
    cy.get(loginPage.passwordField).type(password, { force: true });
    cy.get(loginPage.submitButton).click({ force: true });
});

Cypress.Commands.add('selectDropdownElement', (options: DropdownSelectOptions) => {
    dropdownHelper.selectDropdownElement(options);
});

Cypress.Commands.add('generateReport', (reportName: ReportName) => {
    reportsFinder.selectAndGenerateReport(reportName);
})

Cypress.Commands.add('compareExcelFiles', (templatePath: string, downloadedFilePattern: string): void => {
    compareExcelFiles(templatePath, downloadedFilePattern);
});


