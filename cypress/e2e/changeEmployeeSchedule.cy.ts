import { DatePickerPage } from "cypress/pages/DatePickerPage";
import SchedulerPage from "cypress/pages/SchedulerPage";
import { ScheduleTablePage } from "cypress/pages/ScheduleTablePage";
import SideBarMenu from "cypress/pages/SideBarPage";

const sideBarMenu = new SideBarMenu();
const schedulePage = new SchedulerPage();
const datePicker = new DatePickerPage();
const scheduleTable = new ScheduleTablePage();

const testData = {
    start: '02.09.2024',
    end: '04.09.2024',
    dayToChange: '04.09',
    employeeName: 'Marciniszyn',
    hours: '0800-1500'
}

describe('Change employee schedule', () => {
    beforeEach(() => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    });

    it('It should be possible to make changes in employee schedule', () => {
        sideBarMenu.clickScheduleIcon();
        datePicker.selectWorkScheduleDateRange(testData.start, testData.end);
        scheduleTable.selectSchedule({
            startDate: testData.start,
            endDate: testData.end,
            employeeName: testData.employeeName,
            dayToChange: testData.dayToChange
        });
        schedulePage.selectWorkingHours(testData.hours);
        schedulePage.verifyChanges(testData.employeeName)
            .should('be.visible');
    });

    afterEach(() => {
        sideBarMenu.clickScheduleIcon();
        datePicker.selectWorkScheduleDateRange(testData.start, testData.end);
        schedulePage.clickDeleteSchedule(testData.employeeName);
    })
});