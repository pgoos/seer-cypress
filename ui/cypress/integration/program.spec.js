import { daysOfWeek, urlPaths } from "../support/constants"
import * as programsPageActions from "../support/commands/programs"
import * as createProgramPageActions from "../support/commands/createProgram"
import * as signInPageActions from "../support/commands/signIn"

describe('programs create', () => {
    
    beforeEach(() => {
        cy.visitWithBaseAuth('')

        cy.fixture('accounts').then((accounts) => {
            signInPageActions.loginWith(accounts.valid.director.email, accounts.valid.director.password)
        })

    })

    context('successful', () => {
    
        it('can create weekly rate program', () => {

            cy.fixture('programs').then((program) => {
                const programName = `${program.weeklyRate.name} ${faker.random.uuid()}`

                cy.visitWithBaseAuth(urlPaths.PROGRAMS)
    
                programsPageActions.clickCreateProgram()

                createProgramPageActions.createProgramWithFlatRate({
                    rate: program.weeklyRate.rate,
                    name: programName,
                    days: [
                        daysOfWeek.MONDAY,
                        daysOfWeek.TUESDAY
                    ] 
                })

                programsPageActions.verifyProgramExists(programName)
            })
            
        })

        it('can create program based on number of days', () => {
            const daysRates = [
                {
                    'days': '1',
                    'rate': '100.00'
                },{
                    'days': '2',
                    'rate': '150.00'
                }
            ]

            cy.fixture('programs').then((program) => {
                const programName = `${program.weeklyRate.name} ${faker.random.uuid()}`

                cy.visitWithBaseAuth(urlPaths.PROGRAMS)

                programsPageActions.clickCreateProgram()

                createProgramPageActions.createProgramPriceBasedOnNumberOfDays({
                    daysRates: daysRates,
                    name: programName,
                    days: [
                        daysOfWeek.MONDAY,
                        daysOfWeek.TUESDAY
                    ]
                })

                programsPageActions.verifyProgramExists(programName)
            })
            
        })
    })
})