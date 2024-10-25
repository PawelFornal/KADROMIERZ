declare namespace Cypress {
    interface Chainable<Subject> {
        login(Login: string, Password: string): Chainable<void>
    }
}
declare namespace Cypress {
    interface Chainable {
        selectDateRange(startDate: string, endDate: string): Chainable<void>;
    }
}