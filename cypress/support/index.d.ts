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
    }
}
declare namespace Cypress {
    interface Chainable {
        acceptCookies(): Chainable<void>
    }
}

