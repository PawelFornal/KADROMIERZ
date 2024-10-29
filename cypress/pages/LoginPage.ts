import { loginPage } from "cypress/support/selectors/loginPage";

class LoginPage {

    public typeLogin(login: string): void {
        cy.get(loginPage.loginField).type(login, { force: true });
    }

    public typePassword(password: string): void {
        cy.get(loginPage.passwordField).type(password, { force: true });
    }

    public clickSubmitButton(): void {
        cy.get(loginPage.submitButton).click();
    }

    public getFailedLoginMessage(): Cypress.Chainable<any> {
        return cy.get(loginPage.failedLoginMessage);
    }

    public clickForgotPassword(): void {
        cy.get(loginPage.forgottenPassword).click();
    }

    public clickLoginViaGoogle(): void {
        cy.get(loginPage.loginWithGoogle).click();
    }

    public clickRegisterAccount(): void {
        cy.get(loginPage.createAccount).click();
    }

    public checkRememberMeCheckbox(): void {
        cy.get(loginPage.rememberMeCheckBox).check();
    }

    public unCheckRememberMeCheckbox(): void {
        cy.get(loginPage.rememberMeCheckBox).uncheck();
    }
}
export default LoginPage