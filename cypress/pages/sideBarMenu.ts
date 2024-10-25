import { sideBarSelector } from "cypress/support/selectors/side_bar_main_menu";

class SideBarMenu {

    public getMenuNotificationIcon(): void {
        cy.get(sideBarSelector.notificationIcon).eq(0)
    }

    public getMenuExportIcon(): void {
        cy.get(sideBarSelector.notificationIcon).eq(1)
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
}

export default SideBarMenu