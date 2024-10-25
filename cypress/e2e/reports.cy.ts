import SideBarMenu from "cypress/pages/sideBarMenu";

const sideBarMenu = new SideBarMenu();

const testData = {
    start: '01.09.2024',
    end: '30.09.2024'
}

describe("Adding new employee", () => {
    it("Adding new employee should be possible via Moja firma menu", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        // cy.wait(7000)
        sideBarMenu.clickMenuExportIcon()
        cy.contains('.tile__content h1', 'Sumaryczny raport czasu pracy')
            .parents('.tile')
            .find('button.kButton:contains("Generuj eksport")')
            .click()
        // cy.get('#inputCalendar').click()
        cy.selectDateRangeReport(testData.start, testData.end);
        cy.get('[data-test="confirmButton"]').click()
        cy.get('[data-test="confirmButton"]').click()
    })
})