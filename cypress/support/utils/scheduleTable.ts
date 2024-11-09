import { tableSchedule } from "../selectors/schedulerMenu";

export const scheduleTable = {
    selectEmployeSchedule: (options: {
        startDate: string,
        endDate: string,
        employeeName: string,
        dayToChange: string
    }) => {
        const { startDate, endDate, employeeName, dayToChange } = options;

        if (startDate === endDate) {
            cy.contains(tableSchedule.rowEmployeeName, employeeName)
                .parents('tr')
                .find(tableSchedule.fieldToChange)
                .click({ force: true }); // jeśli daty są takie same, klika w znalezioną datę
        } else {
            let targetColumnIndex: number;
            cy.get(tableSchedule.headerDay)
                .each(($headerCell, index) => {
                    if ($headerCell.find('span').text().includes(dayToChange)) {
                        targetColumnIndex = index; // znajduje indeks kolumny z datą do zmiany
                        return false; // przerywa iterację po znalezionej kolumnie
                    }
                })
                .then(() => {
                    cy.get(tableSchedule.tableRow)
                        .each(($row) => {
                            if ($row.find(tableSchedule.rowEmployeeName).text().includes(employeeName)) { // znajduje wiersz z pracownikiem
                                cy.wrap($row)
                                    .find(tableSchedule.cellSelector)
                                    .eq(targetColumnIndex)
                                    .click({ force: true }); // klika w znalezioną komórkę na przecięciu wiersza i kolumny
                                return false; // przerywa iterację po znalezionym wierszu
                            }
                        });
                });
        }
    }
};