import { CalendarConfig } from "../interfaces/ICalendar";
import { absencesSelectors } from "../selectors/absences";
import { employeeSelector } from "../selectors/companyManage";
import { reportSelectors } from "../selectors/exportReports";
import { calendarSelectors, headerFilters } from "../selectors/schedulerMenu";
import { POLISH_MONTHS } from "../test_data";

export const datePickerWorkSchedule: CalendarConfig = {
    picker: headerFilters.datePicker,
    closeButton: calendarSelectors.closeButton
};

export const datePickerReports: CalendarConfig = {
    picker: reportSelectors.calendarField,
    closeButton: employeeSelector.confirmButton
};

export const datePickerAbsence: CalendarConfig = {
    picker: absencesSelectors.calendarField,
    closeButton: employeeSelector.confirmButton
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

    // navigateToMonth(dateStr: string, attempts: number = 0, maxAttempts: number = 12): void {
    //     if (attempts >= maxAttempts) {
    //         throw new Error(`Przekroczono maksymalny limit ${maxAttempts} prób`); 
    //     }
    //     const [, month, year] = dateStr.split('.').map(Number);
    //     const monthName = POLISH_MONTHS[month - 1];

    //     cy.get(calendarSelectors.monthYearPicker).then($month => {
    //         const [currentMonth, currentYear] = $month.text().split(' ');
    //         if (!$month.text().includes(`${monthName} ${year}`)) {
    //             const currentMonthIndex = POLISH_MONTHS.indexOf(currentMonth.toLowerCase());
    //             const direction = new Date(year, month - 1) >
    //                 new Date(parseInt(currentYear), currentMonthIndex);
    //             // IF direction jest TRUE, to znaczy, że data, którą chcemy wybrać jest większa od aktualnej
    //             // i musimy kliknąć w przycisk "następny", ELSE klikamy w przycisk "poprzedni"
    //             cy.get(direction ? calendarSelectors.nextButton : calendarSelectors.prevButton).click();
    //             this.navigateToMonth(dateStr, attempts + 1, maxAttempts); // spróbować to zrobić w pętli WHILE żeby zużyło mniej pamięci
    //         }
    //     });
    // },
    navigateToMonth(dateStr: string): void {
        const [, month, year] = dateStr.split('.').map(Number);
        const monthName = POLISH_MONTHS[month - 1];
        const maxAttempts = 12;

        cy.wrap([...Array(maxAttempts)]).each((_, attempt) => {
            cy.get(calendarSelectors.monthYearPicker).then($month => {
                if (attempt > maxAttempts) {
                    throw new Error(`Przekroczono maksymalny limit ${maxAttempts} prób`);
                }

                if ($month.text().includes(`${monthName} ${year}`)) {
                    return false; // przerywa iterację
                }

                const [currentMonth, currentYear] = $month.text().split(' ');
                const currentMonthIndex = POLISH_MONTHS.indexOf(currentMonth.toLowerCase());
                const direction = new Date(year, month - 1) >
                    new Date(parseInt(currentYear), currentMonthIndex);

                cy.get(direction ? calendarSelectors.nextButton : calendarSelectors.prevButton).click();
            });
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
    selectDateRange(startDate: string, endDate: string, config: CalendarConfig = datePickerWorkSchedule): void {
        this.validateDateRange(startDate, endDate);
        cy.get(config.picker).click();
        this.navigateToMonth(startDate);
        this.selectDate(startDate);
        this.navigateToMonth(endDate);
        this.selectDate(endDate);
        cy.get(config.closeButton).click({ force: true });
    }
}