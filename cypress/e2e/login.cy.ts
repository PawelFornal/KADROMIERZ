
describe("Login page in Kadromierz web-app", () => {

    it("I should successfully log in with valid credentials", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    })
})