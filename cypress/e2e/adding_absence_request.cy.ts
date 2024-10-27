import SideBarMenu from "cypress/pages/sideBarMenu";
import { employeeSelector } from "cypress/support/selectors/company_manage";

const sideBarMenu = new SideBarMenu();

const absenceData = {
    labelEmployee: 'Pracownik',
    labelType: 'Rodzaj',
    employeeName: 'Marcin Marciniszyn',
    absenceType: 'Urlop wypoczynkowy',
    start: '08.11.2024',
    end: '11.11.2024',
    options: 'Szczegóły wniosku'
}

describe("Add absence request", () => { // do zmiany tekst
    it("It should be possible to add new absence request and accept it ", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickAbsenceIcon();
        cy.get('button.kButton.kButton--orange')
            .find('span')
            .contains('Dodaj urlop')
            .parent('button')
            .click();
        cy.selectFromDropdown({
            label: absenceData.labelEmployee,
            value: absenceData.employeeName
        });
        cy.selectFromDropdown({
            label: absenceData.labelType,
            value: absenceData.absenceType
        });
        cy.selectDateRangeAbsence(absenceData.start, absenceData.end);
        cy.scrollTo('top');
        cy.contains('td.mdTableBody__cell', absenceData.employeeName)
            .closest('tr.mdTableBody__row')
            .find('.mdTableBody__cell--center .k-kebabMenu__icon')
            .click();
        cy.contains('.k-dropdownMenu__button', 'Szczegóły wniosku')
            .should('be.visible')
            .click();
        cy.get(employeeSelector.confirmButton).click();
    });
    afterEach(() => {
        sideBarMenu.clickAbsenceIcon();
        cy.get('.mdTable__table').should('be.visible');
        cy.scrollTo('top');
        cy.contains('td.mdTableBody__cell', absenceData.employeeName)
            .closest('tr.mdTableBody__row')
            .find('.mdTableBody__cell--center .k-kebabMenu__icon')
            .click();
        cy.contains('.k-dropdownMenu__button', 'Szczegóły wniosku')
            .should('be.visible')
            .click();
        cy.contains('button.mdKadroModalFooterAction', 'Usuń wniosek').click();
        cy.get('#delete').type(Cypress.env("deleteConfirm"))
        cy.get(employeeSelector.confirmButton).click()
        sideBarMenu.clickAbsenceIcon();
    })

})
