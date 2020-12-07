export class AdultsPage {
    constructor() {
        this.elements = {
            addAdult: () => cy.get('button').contains('Add Adult'),
            addAdultItems: (text) => cy.get('.dropdown-item').contains(text),
            adultsData: () => cy.get('table tbody tr')
        } 
    }
}

export const adultsPage = new AdultsPage()