import { mapCypressEnvToProcessEnv } from "../support/env"
import * as signInPageActions from "../support/commands/signIn"


describe('Kiosk functionality', () => {
    before(() => {
        mapCypressEnvToProcessEnv(true)
    })
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')

        // todo with api: create daycare, create director account, create kiosk, reveal kiosk pin 
        cy.fixture('accounts').then((accounts) => {
            signInPageActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)
        })
    })

    it('can clock in an employee', () => {
        cy.visitWithBaseAuth('/adults')
    })
})