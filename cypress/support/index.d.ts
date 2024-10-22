declare namespace Cypress {
    interface Chainable<Subject> {
        login(user: string, haslo: string): Chainable<void>
    }
}