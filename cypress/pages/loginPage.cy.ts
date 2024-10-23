import { createAccount, forgottenPassword, loginWithGoogle, rememberMeCheckBox } from "cypress/support/selectors/loginPage";

class loginPagePO {
    public clickForgotPassword(): Cypress.Chainable<any> {
        return cy.get(forgottenPassword).click();
    }
    public clickLoginViaGoogle(): void {
        cy.get(loginWithGoogle).click();
    }
    public clickRegisterAccount(): void {
        cy.get(createAccount).click();
    }
    public clickRememberMe(): void {
        cy.get(rememberMeCheckBox).check();
    }
}
export default loginPagePO