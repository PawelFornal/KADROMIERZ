
import { loginPage } from "cypress/support/selectors/login_page";
import { dropdownHelper } from "../helpers/absence_request";
import { datePickerAbsence, datePickerReports, datePickerSelector } from "../helpers/date_picker";
import { scheduleTable } from "../helpers/schedule";
import { DropdownSelectOptions } from "../interfaces/Iabsence_requests";
import { cookiesAcceptButton, cookiesBanner } from "../selectors/cookies";


Cypress.Commands.add('acceptCookies', () => {
    cy.get(cookiesAcceptButton)
        .click({ force: true })
        .then(() => {
            cy.get(cookiesBanner).should('not.be.visible');
        });
});

Cypress.Commands.add('login', (Login, Password) => {
    cy.visit('');
    cy.get(loginPage.loginField).type(Login, { force: true });
    cy.get(loginPage.passwordField).type(Password, { force: true });
    cy.get(loginPage.submitButton).click({ force: true });
    cy.acceptCookies();
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

Cypress.Commands.add('selectFromDropdown', (options: DropdownSelectOptions) => {
    dropdownHelper.selectFromDropdown(options);
});

