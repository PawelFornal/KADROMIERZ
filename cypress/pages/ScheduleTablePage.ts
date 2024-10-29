import { scheduleTable } from "cypress/support/utils/scheduleTable";

export class ScheduleTablePage {

    selectSchedule(options: {
        startDate: string,
        endDate: string,
        employeeName: string,
        dayToChange: string
    }) {
        return scheduleTable.selectEmployeSchedule(options);
    }
}