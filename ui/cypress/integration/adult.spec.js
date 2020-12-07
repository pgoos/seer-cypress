import { mapCypressEnvToProcessEnv } from "../support/env"
import * as signInPageActions from "../support/commands/signIn"
import { urlPaths } from "../support/constants"
import * as adultsPageActions from "../support/commands/adults"
import * as createAdultPageActions from "../support/commands/createAdult"


describe('Adult functionality', () => {
    before(() => {
        mapCypressEnvToProcessEnv(true)
    })
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')

        cy.fixture('accounts').then((accounts) => {
            signInPageActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)
        })
    })

    it('can create new adult', () => {
        cy.visitWithBaseAuth(urlPaths.ADULTS)

        const firstName = `Adult ${faker.name.firstName()}`
        const lastName = `${faker.name.lastName()} ${faker.random.uuid()}`

        adultsPageActions.clickAddAdult()

        createAdultPageActions.addAdult({
            firstName: firstName,
            lastName: lastName,
            email: faker.internet.email()
        })

        adultsPageActions.verifyAdultExists({
            firstName: firstName,
            lastName: lastName,
        })
    })
})