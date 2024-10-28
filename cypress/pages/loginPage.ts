import { loginPage } from "cypress/support/selectors/login_page";

class loginPagePO {
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
export default loginPagePO