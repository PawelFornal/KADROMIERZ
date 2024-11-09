export const paths = {
    template: 'cypress/test_data/excel_templates/template1.xlsx', // ścieżka do pliku z szablonem
    downloaded: '*_payroll_*.xlsx', // wzorzec nazwy pliku pobranego
}

export const compareExcelFiles = (templatePath: string, downloadedFilePattern: string) => {
    const XLSX = require('xlsx');

    cy.wait(2000)

    cy.readFile(templatePath).should('exist'); // sprawdzam czy plik istnieje
    cy.task('findFile', downloadedFilePattern).should('not.be.null'); // sprawdzam czy plik pobrany istnieje

    // wczytuje plik z szablonem
    cy.task<any>('readExcel', templatePath).then((templateWorkbook) => {
        const templateSheet = templateWorkbook.Sheets[templateWorkbook.SheetNames[0]]; // wczytuje pierwszy arkusz
        const templateData = XLSX.utils.sheet_to_json(templateSheet, { header: 1 }); // konwertuje arkusz do formatu JSON

        // wczytuje plik pobrany
        cy.task<string>('findFile', downloadedFilePattern).then((downloadedPath) => {
            cy.task<any>('readExcel', downloadedPath).then((downloadedWorkbook) => {
                const downloadedSheet = downloadedWorkbook.Sheets[downloadedWorkbook.SheetNames[0]]; // wczytuje pierwszy arkusz
                const downloadedData = XLSX.utils.sheet_to_json(downloadedSheet, { header: 1 }); // konwertuje arkusz do formatu JSON

                // porównuję nagłówki
                expect(templateData[0]).to.deep.equal(downloadedData[0], 'Headers should be the same');

                // porónuję liczbę wierszy
                expect(templateData.length).to.equal(downloadedData.length, 'Number of rows should be the same');
            });
        });
    });
};