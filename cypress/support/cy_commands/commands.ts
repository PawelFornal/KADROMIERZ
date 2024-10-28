
import { loginPage } from "cypress/support/selectors/loginPage";
import { DropdownSelectOptions } from "../interfaces/IAbsenceRequests";
import { cookiesAcceptButton, cookiesBanner } from "../selectors/cookies";
import { ReportName } from "../test_data";
import { datePickerAbsence, datePickerReports, datePickerSelector } from "../utils/datePicker";
import { dropdownHelper } from "../utils/dropdownList";
import { reportsFinder } from "../utils/reportsFinder";
import { scheduleTable } from "../utils/scheduleTable";


Cypress.Commands.add('acceptCookies', () => {
    cy.get(cookiesAcceptButton)
        .click({ force: true })
        .then(() => {
            cy.get(cookiesBanner).should('not.be.visible');
        });
});

Cypress.Commands.add('login', (login, password) => {
    cy.visit('');
    cy.get(loginPage.loginField).type(login, { force: true });
    cy.get(loginPage.passwordField).type(password, { force: true });
    cy.get(loginPage.submitButton).click({ force: true });
    // cy.acceptCookies();
});

Cypress.Commands.add('selectDateRange', (startDate: string, endDate: string) => {
    datePickerSelector.selectDateRange(startDate, endDate);
});

Cypress.Commands.add('selectDateRangeReport', (startDate: string, endDate: string) => {
    datePickerSelector.selectDateRange(startDate, endDate, datePickerReports);
});

Cypress.Commands.add('selectDateRangeAbsence', (startDate: string, endDate: string) => {
    datePickerSelector.selectDateRange(startDate, endDate, datePickerAbsence);
});

Cypress.Commands.add('selectEmployeSchedule', (options: {
    startDate: string,
    endDate: string,
    employeeName: string,
    dayToChange: string,
}) => {
    scheduleTable.selectEmployeSchedule(options);
});

Cypress.Commands.add('selectDropdownElement', (options: DropdownSelectOptions) => {
    dropdownHelper.selectDropdownElement(options);
});

Cypress.Commands.add('generateReport', (reportName: ReportName) => {
    reportsFinder.selectAndGenerateReport(reportName);
})
