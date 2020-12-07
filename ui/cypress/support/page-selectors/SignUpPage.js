export class SignUpPage {
    constructor() {
        this.elements = {
            email: () => cy.get('#Input_Email'),
            password: () => cy.get('#Input_Password'),
            confirmPassword: () => cy.get('#Input_ConfirmPassword'),
            continue: () => cy.get('button').contains('Continue...'),
            firstName: () => cy.get('#Input_FirstName'),
            lastName: () => cy.get('#Input_LastName'),
            daycareName: () => cy.get('#Input_DaycareName'),
            role: () => cy.get('#Input_Role'),
            signUp: () => cy.get('button').contains('Sign Up'),
            confirmation: (index) => cy.get('.kt-login-v2__body h3').eq(index),
            links: () => cy.get('.kt-login-v2__body a')
        }
    }
}

export const signUpPage = new SignUpPage()