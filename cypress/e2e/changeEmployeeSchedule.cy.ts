import SchedulerPage from "cypress/pages/SchedulerPage";
import SideBarMenu from "cypress/pages/SideBarMenu";



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
    beforeEach(() => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
    });
    it('It should be possible to make changes in employee scheduler', () => {
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