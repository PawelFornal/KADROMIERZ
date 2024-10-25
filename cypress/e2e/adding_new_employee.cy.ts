import { sideBarSelector } from "cypress/support/selectors/side_bar_main_menu";
import { randomString } from "cypress/support/test_data";

const testData = {
    firstName: randomString(5),
    lastName: randomString(7)
}
describe("Adding new employee", () => {
    it("Adding new employee should be possible via Moja firma menu", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        cy.wait(20000)
        cy.contains(sideBarSelector.notificationIcon).click()

    })

})