export const companyHeaderSelector = {
    locations: 'a.k-tabNav__routeLink[href="/companymanage/locations"]',
    jobTitles: 'a.k-tabNav__routeLink[href="/companymanage/jobtitles"]',
    shiftBlocks: 'a.k-tabNav__routeLink[href="/companymanage/shiftblocks"]',
    employees: 'a.k-tabNav__routeLink[href="/companymanage/employees"]',
    devices: 'a.k-tabNav__routeLink[href="/companymanage/devices"]',
    employmentConditions: 'a.k-tabNav__routeLink[href="/companymanage/employmentConditions"]',
    avaTypes: 'a.k-tabNav__routeLink[href="/companymanage/avatypes"]',
    roles: 'a.k-tabNav__routeLink[href="/companymanage/roles"]',
    absenceTypes: 'a.k-tabNav__routeLink[href="/companymanage/absence-types"]',
}
export const employeeSelector = {
    addEmployeeButton: '.k-buttonBar__containerLeft',
    optionsTableHeader: '[data-test="optionsTableHeader"]',
    employeeNameColumn: '.col_fullname',
    deleteEmployee: (firstName: string) => `td[data-test*=${firstName}] .delete`,
    confirmButton: 'button[data-test="confirmButton"]',

}
export const newEmployee = {
    firstName: '#name',
    lastName: '#lastName',
    roleSelect: '.mdSelectInput__value',
    locationTab: 'div[data-test="locationsTab"]',
    locationSelect: '[data-test="locationsSelect"]',
    locationDropdownItem: '.mdMultiSelect__dropdown__item__text',
    contractsTab: 'div[data-test="contractsTab"]',
    jobSelect: '[data-test="jobTitlesSelect"]',
    jobDropdownItem: '.mdMultiSelect__dropdown__item__text',
}
