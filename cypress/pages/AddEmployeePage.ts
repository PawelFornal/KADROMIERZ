import { employeeSelector, newEmployee } from "cypress/support/selectors/companyManage";

class AddEmployee {

    public clickAddEmployeeButton(): void {
        cy.get(employeeSelector.addEmployeeButton).should('be.visible').click()
    }

    public addEmployeeFirstName(firstName: string): void {
        cy.get(newEmployee.firstName).type(firstName)
    }

    public addEmployeeLastName(lastName: string): void {
        cy.get(newEmployee.lastName).type(lastName)
    }

    public addEmployeeCredentials(firstName: string, lastName: string): void {
        this.addEmployeeFirstName(firstName)
        this.addEmployeeLastName(lastName)
    }

    public clickLocationTab(): void {
        cy.get(newEmployee.locationTab).click()
    }

    public clickLocationSelect(): void {
        cy.get(newEmployee.locationSelect).click()
    }

    public selectLocation(location: string): void {
        cy.get(newEmployee.locationTab).click()
        cy.get(newEmployee.locationSelect).click()
        cy.get(newEmployee.locationDropdownItem)
            .contains(location)
            .click()
    }

    public clickContractsTab(): void {
        cy.get(newEmployee.contractsTab).click()
    }

    public clickJobSelect(): void {
        cy.get(newEmployee.jobSelect).click()
    }

    public selectJob(job: string): void {
        cy.get(newEmployee.contractsTab).click()
        cy.get(newEmployee.jobSelect).click()
        cy.get(newEmployee.jobDropdownItem)
            .contains(job)
            .click()
    }

    public clickOnSaveButton(): void {
        cy.get(employeeSelector.confirmButton).click()
    }

    public checkAddedEmployee(lastName: string): Cypress.Chainable<any> {
        return cy.get(employeeSelector.employeeNameColumn)
    }

    public deleteAddedEmployee(lastName: string): void {
        cy.get(employeeSelector.employeeNameColumn)
            .should('contain', lastName)
        cy.get(employeeSelector.optionsTableHeader).scrollIntoView()
        cy.get(employeeSelector.deleteEmployee(lastName)).click()
        cy.get(employeeSelector.deleteTextField).type(Cypress.env("deleteConfirm"))
        cy.get(employeeSelector.confirmButton).click()
        cy.get(employeeSelector.employeeNameColumn)
            .should('contain', lastName)
    }
}
export default AddEmployee;