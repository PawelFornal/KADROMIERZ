import { CalendarConfig } from "cypress/support/interfaces/ICalendar";
import { calendarSelectors, headerFilters } from "cypress/support/selectors/schedulerMenu";
import { datePickerAbsence, datePickerReports, datePickerSelector, datePickerWorkSchedule } from "cypress/support/utils/datePicker";


export class DatePickerPage {
    private readonly datePicker = datePickerSelector;

    selectDateRange(
        startDate: string,
        endDate: string,
        config: CalendarConfig = datePickerWorkSchedule
    ) {
        return this.datePicker.selectDateRange(startDate, endDate, config);
    }

    selectWorkScheduleDateRange(startDate: string, endDate: string): void {
        this.selectDateRange(startDate, endDate, datePickerWorkSchedule);
    }

    selectReportDateRange(startDate: string, endDate: string): void {
        this.selectDateRange(startDate, endDate, datePickerReports);
    }

    selectAbsenceDateRange(startDate: string, endDate: string): void {
        this.selectDateRange(startDate, endDate, datePickerAbsence);
    }

    public getDatePicker() {
        return cy.get(headerFilters.datePicker);
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

