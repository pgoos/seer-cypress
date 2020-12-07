import {
    employeeRoles,
    registerDaycarePhases
} from "../constants"
import * as emailService from "../../../../api/factories/email";
import { signUpPage } from "../page-selectors/SignUpPage";
import { signInPage } from "../page-selectors/SignInPage";

export const registerDaycare = ({
    email,
    password,
    firstName,
    lastName,
    daycareName,
}) => {
    signUpPage.elements.email().type(email)
    signUpPage.elements.password().type(password)
    signUpPage.elements.confirmPassword().type(password)
    signUpPage.elements.continue().click()

    signUpPage.elements.firstName().type(firstName)
    signUpPage.elements.lastName().type(lastName)
    signUpPage.elements.daycareName().type(daycareName)
    signUpPage.elements.signUp().click()

    verifyRegistrationPhase(registerDaycarePhases.CONFIRM_EMAIL, email)
}

export const verifyRegistrationPhase = (phase, email) => {
    switch (phase) {
        case registerDaycarePhases.CONFIRM_EMAIL:
            signUpPage.elements.confirmation(0).should('have.text', 'Almost done!')
            signUpPage.elements.confirmation(1).should('have.text', '\n        Need to confirm your email to get started.\n        Please check your inbox. A confirmation link was sent to\n    ')
            signUpPage.elements.confirmation(2).should('have.text', email)
            break;
        case registerDaycarePhases.EMAIL_CONFIRMED:
            signUpPage.elements.links().eq(0)
                .should('have.text', 'Sign In')
                .should('have.attr', 'href', '/account/sign-in?returnUrl=%2Fonboarding%2Fwelcome')
                .click()
        
            cy.title().should('eq', 'Sign In - Child Care Seer')
            break;
        case registerDaycarePhases.INITIAL_SETUP_DONE:
        default:
            break;
    }
}

export const confirmEmail = (email) => {
    cy.wrap(emailService.latest(email)).then(message => {
        let confirmLink = new URL(message.links.html[0]).href
        confirmLink = confirmLink.replace('&amp;', '&')     // encoding issue: &amp; -> &

        cy.visitWithBaseAuth(confirmLink)
        verifyRegistrationPhase(registerDaycarePhases.EMAIL_CONFIRMED)
    })
}