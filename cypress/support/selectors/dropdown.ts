export const dropdownSelector = {
    label: '.mdSelectInput__label',
    labelElement: '.mdSelect',
    inputs: '.mdSelectInput__container',
    searchValue: '.searchItem input[type="text"]',
    expectedValue: (value: string) => `[data-test="${value}"]`


}