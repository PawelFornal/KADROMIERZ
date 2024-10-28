import { absencesSelectors } from "cypress/support/selectors/absences";
import { employeeSelector } from "cypress/support/selectors/companyManage";

class AbsencePage {

    public clickOnAddAbsenceButton(): void {
        cy.get(absencesSelectors.addAbsenceButton).click()
    }
    public checkAbsenceRequestSubmitted(employeeName: string): Cypress.Chainable<any> {
        return cy.scrollTo('top').contains(absencesSelectors.employeeFinder, employeeName)
    }
    public clickOnAcceptRequestButton(employeeName: string, options: string): void {
        cy.scrollTo('top');
        cy.contains(absencesSelectors.employeeFinder, employeeName)
            .closest(absencesSelectors.tableRow)
            .find(absencesSelectors.optionsButton)
            .click();
        cy.contains(absencesSelectors.dropdownButton, options)
            .should('be.visible')
            .click();
        cy.get(employeeSelector.confirmButton).click();
    }

    public findAbsenceTable(): Cypress.Chainable<any> {
        return cy.get(absencesSelectors.table)
    }

    public clickOnRemoveRequestButton(employeeName: string, options: string, remove: string): void {
        cy.scrollTo('top')
        cy.contains(absencesSelectors.employeeFinder, employeeName)
            .closest(absencesSelectors.tableRow)
            .find(absencesSelectors.optionsButton)
            .click();
        cy.contains(absencesSelectors.dropdownButton, options)
            .should('be.visible')
            .click();
        cy.contains(absencesSelectors.removeRequest, remove).click();
        cy.get(employeeSelector.deleteTextField).type(Cypress.env("deleteConfirm"))
        cy.get(employeeSelector.confirmButton).click()
    }
}
export default AbsencePage