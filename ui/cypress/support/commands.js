import * as emailService from "../../../api/factories/email";
import { mapCypressEnvToProcessEnv } from "./env";

Cypress.Commands.add("visitWithBaseAuth", (url) => {  
    cy.visit(url, { 
        auth: {
            username: Cypress.env('basicAuthLogin'),
            password: Cypress.env('basicAuthPassword')
        }
    })
})

Cypress.Commands.add("getLatestEmail", async (email) => {
    mapCypressEnvToProcessEnv(true)
    return await emailService.latest(email)
})

Cypress.Commands.add('selectNth', { prevSubject: 'element' }, (subject, pos) => {
    cy.wrap(subject)
        .children('option')
        .eq(pos)
        .then(e => {
            cy.wrap(subject).select(e.val())
        })
})