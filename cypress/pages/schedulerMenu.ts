import { employeeSelector } from "cypress/support/selectors/company_manage";
import { changesModal, tableSchedule } from "cypress/support/selectors/scheduler_menu";

class SchedulerPage {
    public clickOnWorkingHours(): void {
        cy.get(changesModal.workingHours).click()
    }
    public selectWorkingHours(hours: string): void {
        cy.get(changesModal.workingHours).type(hours)
        cy.get(employeeSelector.confirmButton).click()
    }
    public clickCloseButton(): void {
        cy.get(employeeSelector.confirmButton).click()
    }
    public clickDeleteSchedule(employeeName: string): void {
        cy.contains(tableSchedule.rowEmployeeName, employeeName)
            .parents(tableSchedule.tableRow)
            .find(tableSchedule.block)
            .then($block => {
                // Zmiana CSS aby pokazać kontener ikon
                cy.wrap($block)
                    .find(tableSchedule.blockContainer)
                    .invoke('css', 'display', 'block')
                    .find(tableSchedule.blockDeleteIcon)
                    .click({ force: true });
            })
        cy.get(employeeSelector.confirmButton).click();

    }
}
export default SchedulerPage