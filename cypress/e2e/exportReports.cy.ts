
import { DatePickerPage } from "cypress/pages/DatePickerPage";
import ReportsPage from "cypress/pages/ExportReportsPage";
import SideBarMenu from "cypress/pages/SideBarPage";
import { REPORTS } from "cypress/support/test_data";

const sideBarMenu = new SideBarMenu();
const reportPage = new ReportsPage();
const datePicker = new DatePickerPage();

const testData = {
    start: '01.09.2024',
    end: '30.09.2024',
    employeeName: 'Marcin Marciniszyn'

}

describe("Download a working time report", () => {
    it("It should be possible to go to exports and generate working time report", () => {
        cy.login(Cypress.env("Login"), Cypress.env("Password"));
        sideBarMenu.clickMenuExportIcon()
        cy.generateReport(REPORTS.SUMMARY_TIME_REPORT)
        datePicker.selectReportDateRange(testData.start, testData.end);
        reportPage.clickClearEmployeeFilter()
        reportPage.clickSelectEmployee()
        reportPage.selectEmployee(testData.employeeName)
        reportPage.checkAllCheckboxes()
        reportPage.clickConfirmExport()
        reportPage.clickOnDownloadWidged()
        reportPage.clickOnHistoryHeader()
        reportPage.findGeneratedReport(testData.start, testData.end)
    })
})