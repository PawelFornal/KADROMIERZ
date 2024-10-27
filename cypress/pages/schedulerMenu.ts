import { employeeSelector } from "cypress/support/selectors/company_manage";
import { changesModal } from "cypress/support/selectors/scheduler_menu";

class SchedulerPage {
    public selectWorkingHours(): Cypress.Chainable<any> {
        return cy.get(changesModal.workingHours)
    }
    public clickCloseButton(): void {
        cy.get(employeeSelector.confirmButton).click()
    }
}
export default SchedulerPage