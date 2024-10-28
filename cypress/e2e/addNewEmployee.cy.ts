import AddEmployee from "cypress/pages/AddEmployee";
import SideBarMenu from "cypress/pages/SideBarMenu";
import { randomString } from "cypress/support/test_data";

const testData = {
    firstName: randomString(5),
    lastName: randomString(7),
    labelRole: 'Rola',
    role: 'Pracownik',
    location: 'Twoja lokalizacja',
    job: 'Obsługa klienta',

}
const sideBarMenu = new SideBarMenu();
const addEmployee = new AddEmployee();

describe("Adding new employee functionality in 'Moja Firma' menu", () => {
    beforeEach(() => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    })

    it("It should be possible to add new employee via side bar's menu 'Moja Firma' ", () => {
        sideBarMenu.clickCompanyManageIcon()
        addEmployee.clickAddEmployeeButton()
        addEmployee.addEmployeeCredentials(testData.firstName, testData.lastName)
        cy.selectDropdownElement({
            label: testData.labelRole,
            value: testData.role
        });
        addEmployee.selectLocation(testData.location)
        addEmployee.selectJob(testData.job)
        addEmployee.clickOnSaveButton()
        addEmployee.checkAddedEmployee(testData.lastName)
            .should('contain', `${testData.firstName} ${testData.lastName}`)
    })

    afterEach(() => {
        sideBarMenu.clickCompanyManageIcon()
        addEmployee.deleteAddedEmployee(testData.lastName)
    })
})