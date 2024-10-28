import AbsencePage from "cypress/pages/absences";
import SideBarMenu from "cypress/pages/sideBarMenu";

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
    remove: 'Usuń wniosek'
}

describe("Add absence request", () => {
    it("It should be possible to add new absence request and accept it ", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickAbsenceIcon();
        absencePage.clickOnAddAbsenceButton();
        cy.selectFromDropdown({
            label: absenceData.labelEmployee,
            value: absenceData.employeeName
        });
        cy.selectFromDropdown({
            label: absenceData.labelType,
            value: absenceData.absenceType
        });
        cy.selectDateRangeAbsence(absenceData.start, absenceData.end);
        absencePage.clickOnAcceptRequestButton(absenceData.employeeName, absenceData.options);
    });
    afterEach(() => {
        sideBarMenu.clickAbsenceIcon();
        absencePage.findAbsenceTable().should('be.visible');
        absencePage.clickOnRemoveRequestButton(absenceData.employeeName, absenceData.options, absenceData.remove);
        sideBarMenu.clickAbsenceIcon();
    })

})
