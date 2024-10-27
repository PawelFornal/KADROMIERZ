import SideBarMenu from "cypress/pages/sideBarMenu";


const sideBarMenu = new SideBarMenu();

describe("Adding new employee functionality in 'Moja Firma' menu", () => { // do zmiany tekst
    it("It should be possible to add new employee via side bar's menu 'Moja Firma' ", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickAbsenceIcon();
    })
})