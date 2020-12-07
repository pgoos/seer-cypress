export class SignInPage {
    constructor() {
        this.elements = {
            email: () => cy.get('#Input_Email'),
            password: () => cy.get('#Input_Password'),
            signIn: () => cy.get('button').contains('Sign In'),
            signUp: () => cy.get("a[href = '/account/sign-up-new']"),
            validationErrors: () => cy.get('div.validation-summary-errors li')
        }
    }
}

export const signInPage = new SignInPage()