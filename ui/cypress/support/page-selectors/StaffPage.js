export class StaffPage {
    constructor() {
        this.elements = {
            addEmployee: () => cy.get('button').contains('Add Employee'),
            addEmployeeItems: (text) => cy.get('.dropdown-item').contains(text),
            employeeData: () => cy.get('table tbody tr'),
            employeeLink: (index) => cy.get('table tbody tr')
                                        .eq(index)
                                        // .find('td:nth-child(0) a')  // not working for unknown reason
                                        .find('td')
                                        .eq(0)
                                        .find('a')
                                        .should(($a) => expect($a).to.have.attr('href')) // assert is done in callback fn because it doesn't change yielded subject
                                        .parent(),
            revealKioskPassword: () => cy.get('button').contains('Reveal kiosk password'),
            resetKioskPassword: () => cy.get('.modal-container button')
                                        .should('have.length', 2)
                                        .contains('Reset and view kiosk password'),
            createKioskUser: () => cy.get('.modal-container button')
                                    .should('have.length', 2)
                                    .contains('Create kiosk user'),
            kioskUserName: () => cy.get('.modal-container #userName'),
            kioskPassword: () => cy.get('.modal-container #password'),
            closeKioskModal: () => cy.get('button').contains('Close')
        } 
    }
}

export const staffPage = new StaffPage()