export class WelcomePage {
    constructor() {
        this.elements = {
            continue: () => cy.get('a[href="/onboarding/daycare"]')
                                .contains('Continue')
        }
    }
}

export const welcomePage = new WelcomePage()