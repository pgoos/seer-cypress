export class CommonElements {
    constructor() {
        this.elements = {
            loggedUserAvatar: () => cy.get('nav.navbar .avatar-inline'),
            signOut: () => cy.get('nav.navbar .nav-item')
                            .eq(1)
                            .find('a[href="/account/sign-out"]')

        }
    }
}

export const commonElements = new CommonElements()