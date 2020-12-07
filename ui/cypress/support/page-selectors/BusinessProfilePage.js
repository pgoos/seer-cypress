export class BusinessProfilePage {
    constructor() {
        this.elements = {
            daycareName: () => cy.get('input[placeholder="Daycare name"]'),
            daycareTimezone: () => cy.get('label')
                                    .contains('Daycare time zone')
                                    .parent()
                                    .find('select'),
            operatingHoursAdd: () => cy.get('div')
                                        .contains('div', 'Operating Hours')
                                        .find('button'),
            next: () => cy.get('footer button')
                            .contains('Next')
        }
    }
}

export const businessProfilePage = new BusinessProfilePage()