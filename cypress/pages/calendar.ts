import { calendarSelectors } from "cypress/support/selectors/calendar";

class CalendarPage {
    public getDatePicker() {
        return cy.get(calendarSelectors.picker);
    }

    public getMonthYearPicker() {
        return cy.get(calendarSelectors.monthYearPicker);
    }

    public getNextButton() {
        return cy.get(calendarSelectors.nextButton);
    }

    public getPrevButton() {
        return cy.get(calendarSelectors.prevButton);
    }

    public getMonthName() {
        return cy.get(calendarSelectors.monthName);
    }

    public getDayCell() {
        return cy.get(calendarSelectors.dayCell);
    }

    public getInactiveDayCell() {
        return cy.get(calendarSelectors.inactiveDayCell);
    }

    public getCloseButton() {
        return cy.get(calendarSelectors.closeButton);
    }

    public getDateText() {
        return cy.get(calendarSelectors.dateText);
    }

    public verifySelectedDateRange(expectedText: string): void {
        this.getDateText().should('contain', expectedText);
    }
}

export default CalendarPage;