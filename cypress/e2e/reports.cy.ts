import SideBarMenu from "cypress/pages/sideBarMenu";

const sideBarMenu = new SideBarMenu();

const testData = {
    start: '01.09.2024',
    end: '30.09.2024'
}

describe("Adding new employee", () => {
    it("Adding new employee should be possible via Moja firma menu", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickMenuExportIcon()
        cy.contains('.tile__content h1', 'Sumaryczny raport czasu pracy')
            .parents('.tile')
            .find('button.kButton:contains("Generuj eksport")')
            .click()
        cy.selectDateRangeReport(testData.start, testData.end);
        cy.get('.mdMultiSelectHeader__btn').contains('żaden').click()
        cy.get('.mdMultiSelectPopover').click()
        cy.get('.mdMultiSelectPopoverContent__item').contains('Marcin Marciniszyn').click()
        cy.get('[data-test="confirmButton"]').click()
        cy.get('#availabilities').check({ force: true })
        cy.get('#absences').check({ force: true })
        cy.get('#showOvertimeColumns').check({ force: true })
        cy.get('[data-test="confirmButton"]').click()
        cy.get('.k-exportsWidgetButton__title').should('be.visible').click()
        cy.get('.k-exportsWidgetRow__download').click()
        cy.get('a[class="k-tabNav__routeLink"][href="/exports/history"]').click()
        cy.get('.k-exportItem')
            .filter(`:contains("${testData.start} - ${testData.end}")`)
            .first()
            .find('.k-exportItem__downloadButton')



    })
})