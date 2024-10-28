import { reportSelectors } from "../selectors/exportReports"

export const reportsFinder = {
    selectAndGenerateReport(reportName: string) {
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