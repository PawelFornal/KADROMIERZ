import { DateRange } from "cypress/support/interfaces/Icalendar";
import { calendarSelectors } from "cypress/support/selectors/calendar";
import { POLISH_MONTHS } from "cypress/support/test_data";




class CalendarPage {

    private validateDateRange(startDate: string, endDate: string): void {
        const [sDay, sMonth, sYear] = startDate.split('.').map(Number);
        const [eDay, eMonth, eYear] = endDate.split('.').map(Number);
        const diffDays = Math.ceil(
            Math.abs(new Date(eYear, eMonth - 1, eDay).getTime() -
                new Date(sYear, sMonth - 1, sDay).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (diffDays > 45) throw new Error('Date range cannot exceed 45 days');
    }

    private navigateToMonth(dateStr: string): void {
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
    }
    private selectDate(dateStr: string): void {
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

    public selectDateRange({ startDate, endDate }: DateRange): void {
        this.validateDateRange(startDate, endDate);
        cy.get(calendarSelectors.picker).click();

        this.navigateToMonth(startDate);
        this.selectDate(startDate);
        this.navigateToMonth(endDate);
        this.selectDate(endDate);

        cy.get(calendarSelectors.closeButton).click({ force: true });
    }

    public verifySelectedDateRange(expectedText: string): void {
        cy.get(calendarSelectors.dateText).should('contain', expectedText);
    }
}

export default CalendarPage