import { API_URL, AUTH_TOKEN } from "../test_data";

export const API = {

    addNewEmployee: () => cy.request({
        method: 'POST',
        url: `${API_URL}employees`,
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'authorization': `AUTH-TOKEN token="${AUTH_TOKEN}"`
        },
        body: {
            first_name: "Jan",
            last_name: "Testowy",
            role: "Pracownik",
            role_id: "employee",
            company_id: "29241",
            locations: [],
        },
        failOnStatusCode: false
    }),
}