export const absencesSelectors = {
    addAbsenceButton: '.mdTableTopContent__options button',
    table: '.mdTable__table',
    // employeeName: (employeeName: string) => `[data-test="${employeeName}"]`,
    employeeFinder: '.mdTableBody__cell',
    tableBody: '.mdTableBody',
    tableRow: '.mdTableBody__row',
    tableCell: '.mdTableBody__cell',
    optionsButton: '.mdTableBody__cell--center .k-kebabMenu__icon',
    dropdownMenu: '.k-dropdownMenu',
    dropdownButton: '.k-dropdownMenu__button',
    dropdownOption: (optionName: string) => `.k-dropdownMenu__button:contains("${optionName}")`,
    dropdownOptionByText: (optionName: string) => `.k-dropdownMenu__button .k-dropdownMenu__title:contains("${optionName}")`,
    cancelButton: '[data-test="cancelButton"]',
    removeRequest: 'button.mdKadroModalFooterAction',
    calendarField: '.k-calendarPopoverInput',
    confirmAbsenceRequetField: 'div[class="mdChip mdChip--green"]',

}