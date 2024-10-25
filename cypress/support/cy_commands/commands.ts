
import CalendarPage from "cypress/pages/calendar";
import { loginField, passwordField, submitButton } from "cypress/support/selectors/login_page";

Cypress.Commands.add('login', (Login, Password) => {
    cy.visit('');
    cy.get(loginField).type(Login);
    cy.get(passwordField).type(Password);
    cy.get(submitButton).click()
})
const calendar = new CalendarPage()
Cypress.Commands.add('selectDateRange', (startDate: string, endDate: string) => {
    calendar.selectDateRange({ startDate, endDate });
});