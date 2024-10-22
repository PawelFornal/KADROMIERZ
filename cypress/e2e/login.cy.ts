import { loginField, passwordField, submitButton } from "cypress/selectors/loginPage.cy";

describe("Login page in Kadromierz web-app", () => {
    it("I should successfully log in with valid credentials", () => {
        cy.visit('');
        cy.get(loginField).type(Cypress.env("Login"));
        cy.get(passwordField).type(Cypress.env("Password"));
        cy.get(submitButton).click()
    })

    it("I should successfully log in with valid credentials", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    })
})