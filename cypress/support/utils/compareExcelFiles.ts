export const paths = {
    template: 'cypress/test_data/excel_templates/template1.xlsx',
    downloaded: '*_payroll_*.xlsx',
}

export const compareExcelFiles = (templatePath: string, downloadedFilePattern: string) => {
    const XLSX = require('xlsx');

    cy.wait(2000)

    cy.readFile(templatePath).should('exist');
    cy.task('findFile', downloadedFilePattern).should('not.be.null');

    // Read-out template file
    cy.task<any>('readExcel', templatePath).then((templateWorkbook) => {
        const templateSheet = templateWorkbook.Sheets[templateWorkbook.SheetNames[0]];
        const templateData = XLSX.utils.sheet_to_json(templateSheet, { header: 1 });

        // Read-out downloaded file
        cy.task<string>('findFile', downloadedFilePattern).then((downloadedPath) => {
            cy.task<any>('readExcel', downloadedPath).then((downloadedWorkbook) => {
                const downloadedSheet = downloadedWorkbook.Sheets[downloadedWorkbook.SheetNames[0]];
                const downloadedData = XLSX.utils.sheet_to_json(downloadedSheet, { header: 1 });

                // Compare headers
                expect(templateData[0]).to.deep.equal(downloadedData[0], 'Headers should be the same');

                // Compare data
                expect(templateData.length).to.equal(downloadedData.length, 'Number of rows should be the same');
            });
        });
    });
};