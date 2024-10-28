import { DropdownSelectOptions } from "../interfaces/IAbsenceRequests";

export const dropdownHelper = {
    selectDropdownElement: (options: DropdownSelectOptions) => {
        const { label, value } = options;

        // Znajdujemy właściwy dropdown po etykiecie
        cy.contains('.mdSelectInput__label', label)
            .parents('.mdSelect')
            .within(() => {
                // Klikamy w input aby otworzyć dropdown
                cy.get('.mdSelectInput__container').click();

                // Wpisujemy wartość w pole wyszukiwania
                cy.get('.searchItem input[type="text"]')
                    .type(value);

                // Klikamy w znaleziony element
                cy.get(`[data-test="${value}"]`)
                    .should('be.visible')
                    .click();
            });
    }
};