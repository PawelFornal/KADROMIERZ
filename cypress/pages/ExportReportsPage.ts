import { employeeSelector } from "cypress/support/selectors/companyManage";
import { reportSelectors } from "cypress/support/selectors/exportReports";

class ReportsPage {

    clickClearEmployeeFilter(): void {
        cy.get(reportSelectors.clearEmployeeFilter).contains('żaden').click()
    }

    clickSelectEmployee(): void {
        cy.get(reportSelectors.selectEmployee).click()

    }

    selectEmployee(employeeName: string): void {
        cy.get(reportSelectors.selectEmployeeName).contains(employeeName).click()
        cy.get(employeeSelector.confirmButton).click()
    }

    checkAvailabilityCheckbox(): void {
        cy.get(reportSelectors.availabilitiesCheck).check({ force: true })
    }

    checkAbsencesCheckbox(): void {
        cy.get(reportSelectors.absencesCheck).check({ force: true })
    }

    checkOvertimeColumnsCheckbox(): void {
        cy.get(reportSelectors.showOvertimeColumnsCheck).check({ force: true })
    }

    checkAllCheckboxes(): void {
        this.checkAvailabilityCheckbox()
        this.checkAbsencesCheckbox()
        this.checkOvertimeColumnsCheckbox()
    }

    clickConfirmExport(): void {
        cy.get(employeeSelector.confirmButton).click()
    }

    clickOnDownloadWidget(): void {
        cy.get(reportSelectors.successfullyGeneratedReport).click()
        cy.get(reportSelectors.downloadReportButton).click()
    }

    clickOnHistoryHeader(): void {
        cy.get(reportSelectors.historyHeader).click()
    }

    findGeneratedReport(start: string, end: string): Cypress.Chainable<any> {
        return cy.get(reportSelectors.generatedFilesList)
            .filter(`:contains("${start} - ${end}")`)
            .first()
            .find(reportSelectors.downloadButton)
    }
}
export default ReportsPage;