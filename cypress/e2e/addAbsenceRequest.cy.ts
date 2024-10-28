import AbsencePage from "cypress/pages/AbsencePage";
import SideBarMenu from "cypress/pages/SideBarPage";


const sideBarMenu = new SideBarMenu();
const absencePage = new AbsencePage();

const absenceData = {
    labelEmployee: 'Pracownik',
    labelType: 'Rodzaj',
    employeeName: 'Marcin Marciniszyn',
    absenceType: 'Urlop wypoczynkowy',
    start: '08.11.2024',
    end: '11.11.2024',
    options: 'Szczegóły wniosku',
    remove: 'Usuń wniosek',
}

describe("Add absence request", () => {
    beforeEach(() => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    });
    it("It should be possible to add new absence request and accept it ", () => {
        sideBarMenu.clickAbsenceIcon();
        absencePage.clickOnAddAbsenceButton();
        cy.selectDropdownElement({
            label: absenceData.labelEmployee,
            value: absenceData.employeeName
        });
        cy.selectDropdownElement({
            label: absenceData.labelType,
            value: absenceData.absenceType
        });
        cy.selectDateRangeAbsence(absenceData.start, absenceData.end);
        absencePage.checkAbsenceRequestSubmitted(absenceData.employeeName)
            .should('be.visible');
        absencePage.clickOnAcceptRequestButton(absenceData.employeeName, absenceData.options);
    });

    afterEach(() => {
        sideBarMenu.clickAbsenceIcon();
        absencePage.findAbsenceTable().should('be.visible');
        absencePage.clickOnRemoveRequestButton(absenceData.employeeName, absenceData.options, absenceData.remove);
        sideBarMenu.clickAbsenceIcon();
    })

})
