import { tableSchedule } from "../selectors/scheduler_menu";

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
                .click({ force: true });
        } else {
            let targetColumnIndex: number;
            cy.get(tableSchedule.headerDay)
                .each(($headerCell, index) => {
                    if ($headerCell.find('span').text().includes(dayToChange)) {
                        targetColumnIndex = index;
                        return false;
                    }
                })
                .then(() => {
                    cy.get(tableSchedule.tableRow)
                        .each(($row) => {
                            if ($row.find(tableSchedule.rowEmployeeName).text().includes(employeeName)) {
                                cy.wrap($row)
                                    .find(tableSchedule.cellSelector)
                                    .eq(targetColumnIndex)
                                    .click({ force: true });
                                return false;
                            }
                        });
                });
        }
    }
};