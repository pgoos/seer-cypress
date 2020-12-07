import { mapCypressEnvToProcessEnv } from "../support/env"
import * as signInPageActions from "../support/commands/signIn"
import { urlPaths } from "../support/constants"
import * as childrenPageActions from "../support/commands/children"
import * as createChildPageActions from "../support/commands/createChild"
import moment from 'moment'


describe('Children functionality', () => {
    before(() => {
        mapCypressEnvToProcessEnv(true)
    })
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')

        cy.fixture('accounts').then((accounts) => {
            signInPageActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)
        })
    })

    it('can create new child', () => {
        cy.visitWithBaseAuth(urlPaths.CHILDREN)

        const firstName = `Child ${faker.name.firstName()}`
        const lastName = `${faker.name.lastName()} ${faker.random.uuid()}`

        childrenPageActions.clickAddChild()

        createChildPageActions.addChild({
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: moment(faker.date.past(18)).format('D-MMMM-YYYY')
        })

        childrenPageActions.verifyChildExists({
            firstName: firstName,
            lastName: lastName,
        })
    })
})