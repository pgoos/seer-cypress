export class CreateAdultPage {
    constructor() {
        this.elements = {
            firstName: () => cy.get('input[name="firstName"]'),
            lastName: () => cy.get('input[name="lastName"]'),
            email: () => cy.get('input[name="email"]'),
            add: () => cy.get('button[type="submit"]')
        } 
    }
}

export const createAdultPage = new CreateAdultPage()