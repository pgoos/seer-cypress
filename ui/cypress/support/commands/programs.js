import { programsPage } from "../page-selectors/ProgramsPage"
import { urlPaths } from "../constants"
import { testUrl } from "../helpers"

export const clickCreateProgram = () => {
    // if (testUrl(urlPaths.PROGRAMS) !== true) {
    //     cy.visit(urlPaths.PROGRAMS)
    // }

    programsPage.elements.create().first().click()
}

export const verifyProgramExists = (programName) => {
    programsPage.elements.program(programName).should('exist')
}