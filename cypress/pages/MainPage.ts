import { mainPageSelector } from "cypress/support/selectors/mainPage";

class MainPage {
    getWelcomeHeader(): Cypress.Chainable<any> {
        return cy.get(mainPageSelector.welcomeHeader)
    }
}
export default MainPage