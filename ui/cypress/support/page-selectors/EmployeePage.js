export class EmployeePage {
    constructor() {
        this.elements = {
            revealKioskPin: () => cy.get('div[entityType="staff"] button')
                                    .contains('Reveal kiosk pin'),
            closeKioskPin: () => cy.get('.modal-container button')
                                    .contains('Close'),
            kioskPin: () => cy.get('.modal-container h1')
        }
    }
}

export const employeePage = new EmployeePage()