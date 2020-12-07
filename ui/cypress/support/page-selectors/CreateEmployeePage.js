export class CreateEmployeePage {
    constructor() {
        this.elements = {
            firstName: () => cy.get('input[name="firstName"]'),
            lastName: () => cy.get('input[name="lastName"]'),
            email: () => cy.get('input[name="email"]'),
            select: (label) => cy.get('label').contains(label)
                                .parent()
                                .find('select'),
            next: () => cy.get('button').contains('Next'),
            skipAndSave: () => cy.get('button')
                                .contains('Skip & save')
        } 
    }
}

export const createEmployeePage = new CreateEmployeePage()