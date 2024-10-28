import AddEmployee from "cypress/pages/addEmployee";
import SideBarMenu from "cypress/pages/sideBarMenu";
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
    it("It should be possible to add new employee via side bar's menu 'Moja Firma' ", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickCompanyManageIcon()
        addEmployee.clickAddEmployeeButton()
        addEmployee.addEmployeeCredentials(testData.firstName, testData.lastName)
        cy.selectFromDropdown({
            label: testData.labelRole,
            value: testData.role
        });
        addEmployee.selectLocation(testData.location)
        addEmployee.selectJob(testData.job)
        addEmployee.clickOnSaveButton()
    })
    afterEach(() => {
        sideBarMenu.clickCompanyManageIcon()
        addEmployee.deleteAddedEmployee(testData.lastName)
    })

})