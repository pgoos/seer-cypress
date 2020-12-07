export class NavMenu {
    constructor() {
        this.elements = {
            items: () => cy.get('li.nav-item'),
        }
    }
}

export const navMenu = new NavMenu()