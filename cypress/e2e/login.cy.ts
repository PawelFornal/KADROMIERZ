import LoginPage from "cypress/pages/LoginPage";
import MainPage from "cypress/pages/MainPage";

const mainPage = new MainPage();
const loginPage = new LoginPage();

describe("Login page in Kadromierz web-app", () => {
    it("I should successfully log in with valid credentials", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        mainPage.getWelcomeHeader()
            .should('be.visible')
            .and('contain', 'Dzień dobry')
    })

    it('Verify incorrect email address error handling with SQL injection', () => {
        cy.login("' OR 1=1--", "admin")
        loginPage.getFailedLoginMessage()
            .should('be.visible')
            .and('contain', 'Podany adres email jest niepoprawny')
    })
})