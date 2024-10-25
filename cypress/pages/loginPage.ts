import { createAccount, forgottenPassword, loginWithGoogle, rememberMeCheckBox } from "cypress/support/selectors/login_page";

class loginPagePO {
    public clickForgotPassword(): void {
        cy.get(forgottenPassword).click();
    }
    public clickLoginViaGoogle(): void {
        cy.get(loginWithGoogle).click();
    }
    public clickRegisterAccount(): void {
        cy.get(createAccount).click();
    }
    public checkRememberMeCheckbox(): void {
        cy.get(rememberMeCheckBox).check();
    }
    public unCheckRememberMeCheckbox(): void {
        cy.get(rememberMeCheckBox).uncheck();
    }
}
export default loginPagePO