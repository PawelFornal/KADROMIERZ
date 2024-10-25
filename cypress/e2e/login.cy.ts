import { forgottenPassword, loginField, newPasswordButton, passwordField, submitButton } from "cypress/support/selectors/login_page";

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

    it("I can change my password", () => {
        cy.visit('');
        cy.get(forgottenPassword).click().then(() => {
            cy.get(loginField).should('be.visible')
            cy.get(newPasswordButton).should('be.visible')
        })
    })
})