import SideBarMenu from "cypress/pages/sideBarMenu";
import { employeeSelector, newEmployee } from "cypress/support/selectors/company_manage";
import { randomString } from "cypress/support/test_data";

const testData = {
    firstName: randomString(5),
    lastName: randomString(7)
}
const sideBarMenu = new SideBarMenu();

describe("Adding new employee functionality in 'Moja Firma' menu", () => {
    it("It should be possible to add new employee via side bar's menu 'Moja Firma' ", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickCompanyManageIcon()
        cy.get(employeeSelector.addEmployeeButton).click()
        cy.get(newEmployee.firstName).type(testData.firstName)
        cy.get(newEmployee.lastName).type(testData.lastName)
        cy.get(newEmployee.roleSelect)
            .contains('Pracownik')
            .click()
        cy.get(newEmployee.locationTab).click()
        cy.get(newEmployee.locationSelect).click()
        cy.get(newEmployee.locationDropdownItem)
            .contains('Twoja lokalizacja')
            .click()
        cy.get(newEmployee.contractsTab).click()
        cy.get(newEmployee.jobSelect).click()
        cy.get(newEmployee.jobDropdownItem)
            .contains('Obsługa klienta')
            .click()
        cy.get(employeeSelector.confirmButton).click()
        cy.get(employeeSelector.employeeNameColumn)
            .should('contain', testData.lastName)
        cy.get(employeeSelector.optionsTableHeader).scrollIntoView()
        cy.get(employeeSelector.deleteEmployee(testData.firstName)).click()
        cy.get(employeeSelector.confirmButton).type(Cypress.env("deleteConfirm"))
        cy.get(employeeSelector.confirmButton).click()
    })

})