
import { calendarSelectors } from "cypress/support/selectors/calendar";
import { loginField, passwordField, submitButton } from "cypress/support/selectors/login_page";
import { POLISH_MONTHS } from "cypress/support/test_data";
import { cookiesAcceptButton, cookiesBanner } from "../selectors/cookies";


Cypress.Commands.add('acceptCookies', () => {
    cy.get(cookiesAcceptButton)
        .click({ force: true })
        .then(() => {
            cy.get(cookiesBanner).should('not.be.visible');
        });
});

Cypress.Commands.add('login', (Login, Password) => {
    cy.visit('');
    cy.get(loginField).type(Login, { force: true });
    cy.get(passwordField).type(Password, { force: true });
    cy.get(submitButton).click({ force: true });
    cy.acceptCookies();
});


const validateDateRange = (startDate: string, endDate: string): void => {
    const [sDay, sMonth, sYear] = startDate.split('.').map(Number);
    const [eDay, eMonth, eYear] = endDate.split('.').map(Number);
    const diffDays = Math.ceil(
        Math.abs(new Date(eYear, eMonth - 1, eDay).getTime() -
            new Date(sYear, sMonth - 1, sDay).getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays > 45) throw new Error('Date range cannot exceed 45 days');
}

const navigateToMonth = (dateStr: string): void => {
    const [, month, year] = dateStr.split('.').map(Number);
    const monthName = POLISH_MONTHS[month - 1];

    cy.get(calendarSelectors.monthYearPicker).then($month => {
        const [currentMonth, currentYear] = $month.text().split(' ');
        if (!$month.text().includes(`${monthName} ${year}`)) {
            const currentMonthIndex = POLISH_MONTHS.indexOf(currentMonth.toLowerCase());
            const direction = new Date(year, month - 1) >
                new Date(parseInt(currentYear), currentMonthIndex);
            cy.get(direction ? calendarSelectors.nextButton : calendarSelectors.prevButton).click();
            navigateToMonth(dateStr);
        }
    });
}

const selectDate = (dateStr: string): void => {
    const [day, month, year] = dateStr.split('.');
    const monthName = POLISH_MONTHS[parseInt(month) - 1];

    cy.get(calendarSelectors.monthName)
        .contains(`${monthName} ${year}`)
        .parent()
        .find(calendarSelectors.dayCell)
        .not(calendarSelectors.inactiveDayCell)
        .contains(day.replace(/^0/, ''))
        .click({ force: true });
}


Cypress.Commands.add('selectDateRange', (startDate: string, endDate: string) => {

    validateDateRange(startDate, endDate);
    cy.get(calendarSelectors.picker).click();

    navigateToMonth(startDate);
    selectDate(startDate);
    navigateToMonth(endDate);
    selectDate(endDate);

    cy.get(calendarSelectors.closeButton).click({ force: true });
});

Cypress.Commands.add('selectDateRangeReport', (startDate: string, endDate: string) => {

    validateDateRange(startDate, endDate);
    cy.get('#inputCalendar').click()

    navigateToMonth(startDate);
    selectDate(startDate);
    navigateToMonth(endDate);
    selectDate(endDate);

    cy.get('[data-test="confirmButton"]').click()
});
