import { DropdownSelectOptions } from "../interfaces/IAbsenceRequests";
import { dropdownSelector } from "../selectors/dropdown";

export const dropdownHelper = {
    selectDropdownElement: (options: DropdownSelectOptions) => {
        const { label, value } = options;

        // Znajdujemy właściwy dropdown po etykiecie
        cy.contains(dropdownSelector.label, label)
            .parents(dropdownSelector.labelElement)
            .within(() => {
                // Klikamy w input aby otworzyć dropdown
                cy.get(dropdownSelector.inputs).click();

                // Wpisujemy wartość w pole wyszukiwania
                cy.get(dropdownSelector.searchValue)
                    .type(value);

                // Klikamy w znaleziony element
                cy.get(dropdownSelector.expectedValue(value))
                    .should('be.visible')
                    .click();
            });
    }
};