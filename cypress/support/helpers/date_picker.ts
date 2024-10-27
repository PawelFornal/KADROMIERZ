import { CalendarConfig } from "../interfaces/Icalendar";
import { calendarSelectors, headerFilters } from "../selectors/scheduler_menu";
import { POLISH_MONTHS } from "../test_data";

export const datePicker: CalendarConfig = {
    picker: headerFilters.datePicker,
    closeButton: calendarSelectors.closeButton
};

export const datePickerReports: CalendarConfig = {
    picker: '#inputCalendar',
    closeButton: '[data-test="confirmButton"]'
};

export const datePickerAbsence: CalendarConfig = {
    picker: '.k-calendarPopoverInput',
    closeButton: '[data-test="confirmButton"]'
};

export const datePickerSelector = {
    validateDateRange(startDate: string, endDate: string): void {
        const [sDay, sMonth, sYear] = startDate.split('.').map(Number);
        const [eDay, eMonth, eYear] = endDate.split('.').map(Number);
        const diffDays = Math.ceil(
            Math.abs(new Date(eYear, eMonth - 1, eDay).getTime() -
                new Date(sYear, sMonth - 1, sDay).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffDays > 45) throw new Error('Date range cannot exceed 45 days');
    },

    navigateToMonth(dateStr: string): void {
        const [, month, year] = dateStr.split('.').map(Number);
        const monthName = POLISH_MONTHS[month - 1];

        cy.get(calendarSelectors.monthYearPicker).then($month => {
            const [currentMonth, currentYear] = $month.text().split(' ');
            if (!$month.text().includes(`${monthName} ${year}`)) {
                const currentMonthIndex = POLISH_MONTHS.indexOf(currentMonth.toLowerCase());
                const direction = new Date(year, month - 1) >
                    new Date(parseInt(currentYear), currentMonthIndex);
                cy.get(direction ? calendarSelectors.nextButton : calendarSelectors.prevButton).click();
                this.navigateToMonth(dateStr);
            }
        });
    },

    selectDate(dateStr: string): void {
        const [day, month, year] = dateStr.split('.');
        const monthName = POLISH_MONTHS[parseInt(month) - 1];

        cy.get(calendarSelectors.monthName)
            .contains(`${monthName} ${year}`)
            .parent()
            .find(calendarSelectors.dayCell)
            .not(calendarSelectors.inactiveDayCell)
            .contains(day.replace(/^0/, ''))
            .click({ force: true });
    },
    selectDateRange(startDate: string, endDate: string, config: CalendarConfig = datePicker): void {
        this.validateDateRange(startDate, endDate);
        cy.get(config.picker).click();

        this.navigateToMonth(startDate);
        this.selectDate(startDate);
        this.navigateToMonth(endDate);
        this.selectDate(endDate);

        cy.get(config.closeButton).click({ force: true });
    }
}