import { mapCypressEnvToProcessEnv } from "../support/env";
import * as emailService from "../../../api/factories/email";
import * as signUpPageActions from "../support/commands/SignUp";
import * as signInPageActions from "../support/commands/SignIn";
import * as daycareSetupActions from "../support/commands/daycareSetup";
import { timezones, daysOfWeek } from "../support/constants";

describe('sign up', () => {
    before(() => {
        // todo: call api/product-administration/settings/201
        // and api/product-administration/settings/203 with { value: false }
        mapCypressEnvToProcessEnv(true)
    })
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')
    })

    it('can create a new day care and set it up', () => {
        const email = emailService.create()
        const password = Cypress.env('newDaycarePassword')
        const operatingSchedule = [ daysOfWeek.FRIDAY,
                                    daysOfWeek.MONDAY,
                                    daysOfWeek.SATURDAY,
                                    daysOfWeek.SUNDAY,
                                    daysOfWeek.THURSDAY,
                                    daysOfWeek.TUESDAY,
                                    daysOfWeek.WEDNESDAY ]

        cy.fixture('daycare_details').then((daycare) => {
            const daycareName = `${daycare.daycareName} ${faker.random.uuid()}`

            signInPageActions.clickSignUp()

            signUpPageActions.registerDaycare({
                email: email,
                password: password,
                firstName: daycare.firstName,
                lastName: daycare.lastName,
                daycareName: daycareName
            })
            
            signUpPageActions.confirmEmail(email)

            signInPageActions.loginWith(email, password)
            cy.title().should('eq', 'Daycare on-boarding - Child Care Seer')

            daycareSetupActions.proceedFromWelcomePage()
            daycareSetupActions.setDaycareName(daycareName)
            daycareSetupActions.setDaycareTimezone(timezones.EASTERN_MOST_AREAS)
            daycareSetupActions.addOperatingHours(operatingSchedule)
        })
        
    })

    // the previous test can be divided so that initial daycare setup is done in this test
    it.skip('can setup newly created daycare', () => {
        // todo with api: create daycare, create director account
        // cy.visitWithBaseAuth('/account/sign-in?returnUrl=%2Fonboarding%2Fwelcome')
        
        // signInPageActions.loginWith(email, password)
        // cy.title().should('eq', 'Daycare on-boarding - Child Care Seer')

        // daycareSetupActions.proceedFromWelcomePage()
        // daycareSetupActions.setDaycareName(daycareName)
        // daycareSetupActions.setDaycareTimezone(timezones.EASTERN_MOST_AREAS)
        // daycareSetupActions.addOperatingHours(operatingSchedule)

    })
})