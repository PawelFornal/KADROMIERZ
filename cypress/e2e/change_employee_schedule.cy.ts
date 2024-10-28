import SchedulerPage from "cypress/pages/schedulerMenu";
import SideBarMenu from "cypress/pages/sideBarMenu";
import { employeeSelector } from "cypress/support/selectors/company_manage";
import { tableSchedule } from "cypress/support/selectors/scheduler_menu";



const sideBarMenu = new SideBarMenu();
const schedulePage = new SchedulerPage();

const testData = {
    start: '02.09.2024',
    end: '04.09.2024',
    dayToChange: '04.09',
    employeeName: 'Marciniszyn',
    hours: '0800-1500'

}
describe('Change employee scheduler', () => {
    it('It should be possible to make changes in employee scheduler', () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickScheduleIcon();
        cy.selectDateRange(testData.start, testData.end);
        cy.selectEmployeSchedule({
            startDate: testData.start,
            endDate: testData.end,
            employeeName: testData.employeeName,
            dayToChange: testData.dayToChange
        });
        schedulePage.selectWorkingHours(testData.hours);
    });
    afterEach(() => {
        sideBarMenu.clickScheduleIcon();
        cy.selectDateRange(testData.start, testData.end);
        schedulePage.clickDeleteSchedule(testData.employeeName);

    })
});