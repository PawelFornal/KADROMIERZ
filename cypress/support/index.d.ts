declare namespace Cypress {
    interface Chainable<Subject> {
        login(Login: string, Password: string): Chainable<void>
    }
}