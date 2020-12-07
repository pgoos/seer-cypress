import { signInPage } from "../page-selectors/SignInPage"
import * as navMenuActions from "./NavMenu"


export const loginWith = (email, password) => {
    signInPage.elements.email().clear().type(email)
    signInPage.elements.password().type(password)
    signInPage.elements.signIn().click()
}

export const verifySuccessfulLogin = () => {
    cy.title().should('eq', 'Child Care Seer')
    
    navMenuActions.verifyMenuLoaded()
}

export const verifyFailedLogin = ()  => {
    signInPage.elements.validationErrors().then((el) => {
        expect(el).to.be.visible
        expect(el).to.have.text('Email password combination is incorrect')
    })

    cy.title().should('eq', 'Sign In - Child Care Seer')
}

export const clickSignUp = () => {
    signInPage.elements.signUp().click()
}