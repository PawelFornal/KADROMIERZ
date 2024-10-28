import { reportSelectors } from "../selectors/export_reports"

export const reportsFinder = {
    selectReport(reportName: string) {
        return cy.contains(reportSelectors.reportList, reportName)
            .should('be.visible')
            .within(() => {
                cy.get('button')
                    .contains('Generuj eksport')
                    .should('be.visible')
                    .click()
            })
    }
}