import { mapCypressEnvToProcessEnv } from "../support/env"
import {
    urlPaths,
    selectorAliases
} from "../support/constants"
import * as signInPageActions from "../support/commands/signIn"
import * as staffPageActions from "../support/commands/staff"
import * as createEmployeePageActions from "../support/commands/createEmployee"
import * as commonActions from "../support/commands/common"
import * as kioskPagesActions from "../support/commands/kiosk"
import * as singleEmployeePageActions from "../support/commands/singleEmployee"

describe('Staff functionality', () => {
    before(() => {
        mapCypressEnvToProcessEnv(true)
    })
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')

        cy.fixture('accounts').then((accounts) => {
            signInPageActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)
        })
    })

    it('can create new staff member', () => {
        cy.visitWithBaseAuth(urlPaths.STAFF)

        cy.fixture('staff').then((staff) => {
            const lastName = `${staff.lastName} ${faker.random.uuid()}`

            staffPageActions.clickAddEmployee()

            createEmployeePageActions.addEmployee({
                firstName: staff.firstName,
                lastName: lastName,
                email: faker.internet.email()
            })

            staffPageActions.verifyEmployeeExists({
                firstName: staff.firstName,
                lastName: lastName
            })
        })
    })

    // todo: create kiosk for the daycare with API in before
    it('can reset kiosk password and then open kiosk session', () => {
        cy.visitWithBaseAuth(urlPaths.STAFF)

        staffPageActions.clickRevealKioskPassword()

        staffPageActions.resetKioskPassword()

        staffPageActions.closeKioskModal()

        commonActions.signOut()

        cy.get(`@${selectorAliases.KIOSK_USERNAME}`).then((username) => {
            cy.get(`@${selectorAliases.KIOSK_PASSWORD}`).then((password) => {
                signInPageActions.loginWith(username, password)
            })    
        })

        kioskPagesActions.verifyStartPageElements()
        cy.title().should('eq', 'Child Care Seer')
    })

    // todo: remove kiosk for the daycare (if any) in before
    it.skip('can create kiosk account and then open kiosk session', () => {
        cy.visitWithBaseAuth(urlPaths.STAFF)

        staffPageActions.clickRevealKioskPassword()

        staffPageActions.createKioskUser()

        staffPageActions.closeKioskModal()

        commonActions.signOut()

        cy.get(`@${selectorAliases.KIOSK_USERNAME}`).then((username) => {
            cy.get(`@${selectorAliases.KIOSK_PASSWORD}`).then((password) => {
                signInPageActions.loginWith(username, password)
            })    
        })

        kioskPagesActions.verifyStartPageElements()
        cy.title().should('eq', 'Child Care Seer')
    })

    it('can reveal kiosk pin', () => {
        cy.visitWithBaseAuth(urlPaths.STAFF)

        staffPageActions.openEmployeePage(0)

        singleEmployeePageActions.revealKioskPin()

        cy.get(`@${selectorAliases.KIOSK_PIN}`).then((pin) => {
            assert.isNumber(parseInt(pin), 'Pin is a number')
        })

        singleEmployeePageActions.closeKioskPinModal()
    })
})