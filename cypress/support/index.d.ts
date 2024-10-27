declare namespace Cypress {
    interface Chainable<Subject> {
        login(Login: string, Password: string): Chainable<void>
    }
}
declare namespace Cypress {
    interface Chainable {
        /**
         * Select a date range in the calendar
         * @param startDate - Start date in format DD.MM.YYYY
         * @param endDate - End date in format DD.MM.YYYY
         */
        selectDateRange(startDate: string, endDate: string): Chainable<void>
        selectDateRangeReport(startDate: string, endDate: string): Chainable<void>
        selectDateRangeAbsence(startDate: string, endDate: string): Chainable<void>
    }
}
declare namespace Cypress {
    interface Chainable {
        acceptCookies(): Chainable<void>
    }
}
// declare namespace Cypress {
//     interface Chainable<Subject> {
//         /**
//          * Custom command to find and click a cell in the schedule table
//          * @param employeeName - The name of the employee whose schedule needs to be modified
//          * @param dayText - The text of the day column where the cell should be clicked
//          * @example
//          * cy.findAndClickScheduleCell('Smith', 'śr 04.09')
//          */
//         findAndClickScheduleCell(employeeName: string, dayText: string): Chainable<Element>
//     }
// }
declare namespace Cypress {
    interface Chainable<Subject> {
        selectEmployeSchedule(options: {
            startDate: string,
            endDate: string,
            employeeName: string,
            dayToChange: string
        }): Chainable<Element>
    }
}
declare namespace Cypress {
    interface Chainable<Subject> {
        selectFromDropdown(options: DropdownSelectOptions): Chainable<Element>
    }
}

