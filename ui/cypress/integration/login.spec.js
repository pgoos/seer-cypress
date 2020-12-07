import * as signInActions from "../support/commands/SignIn";

describe('Login', () => {
    beforeEach(() => {
        cy.visitWithBaseAuth('')
    })

    context('successful', () => {
        it('director can login with proper credentials', () => {
            cy.fixture('accounts').then((accounts) => {
                signInActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)

                signInActions.verifySuccessfulLogin()
            })
        });
        
        it('adult can login with proper credentials', () => {
            cy.fixture('accounts').then((accounts) => {
                signInActions.loginWith(accounts.valid.adult.email, accounts.valid.adult.password)

                signInActions.verifySuccessfulLogin()
            })
        });
    })

    context('failed', () => {
        it('director cannot login with invalid credentials', () => {
            cy.fixture('accounts').then((accounts) => {
                signInActions.loginWith(accounts.valid.director.email, `${accounts.valid.director.password}abc`)

                signInActions.verifyFailedLogin()
            })
        });
        
        it('adult cannot login with invalid credentials', () => {
            cy.fixture('accounts').then((accounts) => {
                signInActions.loginWith(accounts.valid.adult.email, `${accounts.valid.director.password}abc`)

                signInActions.verifyFailedLogin()
            })
        });
    })
})