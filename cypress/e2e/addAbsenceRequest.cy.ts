import AbsencePage from "cypress/pages/AbsencePage";
import { DatePickerPage } from "cypress/pages/DatePickerPage";
import SideBarMenu from "cypress/pages/SideBarPage";

const sideBarMenu = new SideBarMenu();
const absencePage = new AbsencePage();
const datePicker = new DatePickerPage();

const absenceData = {
    labelEmployee: 'Pracownik',
    labelType: 'Rodzaj',
    employeeName: 'Marcin Marciniszyn',
    absenceType: 'Urlop wypoczynkowy',
    start: '08.12.2024',
    end: '11.12.2024',
    options: 'Szczegóły wniosku',
    remove: 'Usuń wniosek',
}

describe("Add absence request", () => {
    beforeEach(() => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    });

    it("It should be possible to add new absence request and accept it", () => {
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
        datePicker.selectAbsenceDateRange(absenceData.start, absenceData.end);
        absencePage.checkAbsenceRequestSubmitted(absenceData.employeeName)
            .should('be.visible');
        absencePage.clickOnAcceptRequestButton(absenceData.employeeName, absenceData.options);
        absencePage.getConfirmationAbsenceRequest(absenceData.employeeName)
            .should('be.visible')
            .and('contain', 'Zaakceptowany')
    });

    after(() => {
        sideBarMenu.clickAbsenceIcon();
        absencePage.findAbsenceTable().should('be.visible');
        absencePage.clickOnRemoveRequestButton(absenceData.employeeName, absenceData.options, absenceData.remove);
    })

})
