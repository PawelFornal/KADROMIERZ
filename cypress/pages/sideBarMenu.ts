import { sideBarSelector } from "cypress/support/selectors/side_bar_main_menu";

class SideBarMenu {

    public getMenuNotificationIcon(): void {
        cy.get(sideBarSelector.notificationIcon).eq(0)
    }

    public clickMenuExportIcon(): void {
        cy.get(sideBarSelector.notificationIcon).eq(1).click('left')
    }

    public getMenuLogoutIcon(): void {
        cy.get(sideBarSelector.logoutIcon).eq(2)
    }
    public getScheduleIcon(): void {
        cy.get(sideBarSelector.scheduleIcon)
    }
    public clickScheduleIcon(): void {
        cy.get(sideBarSelector.scheduleIcon).click('left')
    }
    public clickCompanyManageIcon(): void {
        cy.get(sideBarSelector.companyManageIcon).click('left')
    }
    public clickAbsenceIcon(): void {
        cy.get(sideBarSelector.absencesIcon).click('left')
    }
}

export default SideBarMenu