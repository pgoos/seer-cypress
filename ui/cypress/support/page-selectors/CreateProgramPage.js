export class CreateProgramPage {
    constructor() {
        this.elements = {
            name: () => cy.get('label').contains('Program name')
                            .parent()
                            .find('input[type="text"]'),
            weeklyRate: () => cy.get('label')
                                .contains('Weekly price')
                                .parent()
                                .find('input'),
            daysPicker: () => cy.get('div.form-group')
                                .contains('div', /Select days/g)
                                .should('have.length', 1)
                                .find('button'),
            days: (day) => cy.get('.dropdown-item label')
                            .contains(day)
                            .find('span'),
            close: () => cy.get('label').contains('Weekdays')
                            .parent()
                            .find('button')
                            .contains('Close'),
            from: () => cy.get('div.form-group > label')
                            .contains('Time from')
                            .parent()
                            .find('button')
                            .contains('button', 'Select time'),
            hours: () => cy.get('div.dropdown.open p.hours span.hour')
                                .not('.disabled'),
            minutes: () => cy.get('div.dropdown.open p.minutes span.minute')
                                .not('.disabled'),
            to: () => cy.get('div.form-group > label')
                        .contains('Time to')
                        .parent()
                        .find('button')
                        .contains('button', 'Select time'),
            save: () => cy.get('button').contains('Save'),
            priceByNumberOfDays: () => cy.get('label[for="priceByDays"] > span'),
            daysAWeek: (index) => cy.get(`label[for="numberOfDays-${index}"] > span`),
            priceByDaysAWeek: (index) => cy.get(`label[for="numberOfDays-${index}"]`)
                                                .parent()
                                                .parent()
                                                .find('input[type="tel"]')
        }
    }
}

export const createProgramPage = new CreateProgramPage()