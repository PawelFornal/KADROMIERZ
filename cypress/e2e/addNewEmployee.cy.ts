import AddEmployee from "cypress/pages/AddEmployeePage";
import SideBarMenu from "cypress/pages/SideBarPage";
import { API } from "cypress/support/api_commands/API";
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

describe("Adding new employee via API request", () => {
    it("It should be possible to add new employee via API request", () => {
        API.addNewEmployee()
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.first_name).to.eq('Jan')
                expect(response.body.last_name).to.eq('Testowy')
                expect(response.body.role).to.eq('Pracownik')
                expect(response.body.role_id).to.eq('employee')
                expect(response.body.company_id).to.eq('29241')
            })
    })
})