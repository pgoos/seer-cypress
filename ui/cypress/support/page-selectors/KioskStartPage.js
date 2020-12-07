export class KioskStartPage {
    constructor() {
        this.elements = {
            start: () => cy.get('a[href="/kiosk/login"]').contains('Start')
        }
    }
}

export const kioskStartPage = new KioskStartPage()