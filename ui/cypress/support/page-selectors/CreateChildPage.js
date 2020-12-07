export class CreateChildPage {
    constructor() {
        this.elements = {
            firstName: () => cy.get('input[name="firstName"]'),
            lastName: () => cy.get('input[name="lastName"]'),
            // below selector is not used since it wasn't working for some reason
            // instead, pure 'select' tag is used as DOB selectors for now
            dateOfBirthSelect: () => cy.get('label')
                                        .contains('Child Date of Birth')
                                        .parent()
                                        .parent()
                                        .find('select')
                                        .as('dobSelect'),
            dayOfBirthSelect: () => cy.get('select')
                                        .eq(0),
            monthOfBirthSelect: () => cy.get('select')
                                        .eq(1),
            yearOfBirthSelect: () => cy.get('select')    
                                        .eq(2),
            save: () => cy.get('button[type="submit"]')
        } 
    }
}

export const createChildPage = new CreateChildPage()