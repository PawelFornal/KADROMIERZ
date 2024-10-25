import SideBarMenu from "cypress/pages/sideBarMenu";
import { calendarSelectors } from "cypress/support/selectors/calendar";


const sideBarMenu = new SideBarMenu();

const testData = {
    start: '30.08.2024',
    end: '04.09.2024'
}
describe('Calendar Tests', () => {
    it('should select single date', () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        cy.wait(10000);
        sideBarMenu.clickScheduleIcon();
        cy.selectDateRange(testData.start, testData.end);
        cy.get(calendarSelectors.dateText).should('contain', '30.08 - 04.09');;
        cy.wait(5000);
        cy.get('.k-tableWrapper').should('be.visible');
        cy.get('.k-newScheduleTable__scroll')
            .scrollTo('right')
            .wait(500)
        cy.get('thead th')
            .each(($th, index) => {
                // Sprawdzamy, czy kolumna zawiera tekst "środa 04.09"
                if ($th.text().includes('środa 04.09')) {
                    // Gdy znajdziemy właściwą kolumnę, używamy jej indeksu
                    cy.contains('tr', 'Marciniszyn')
                        .find('.scheduleTable__item')
                        .eq(index - 1)  // odejmujemy 1, bo pierwsza kolumna to nazwa
                        .click();
                }
            });
        cy.get('input[datatype="time"]').type('0800-1500');
        cy.get('button[data-test="confirmButton"]').click();


    });
});