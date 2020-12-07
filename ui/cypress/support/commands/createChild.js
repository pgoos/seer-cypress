import { createChildPage } from "../page-selectors/CreateChildPage"

export const addChild = ({
    firstName,
    lastName,
    dateOfBirth
}) => {
    const [day, month, year] = dateOfBirth.split('-')
    cy.task('log', day)
    cy.task('log', month)

    createChildPage.elements.firstName().type(firstName)
    createChildPage.elements.lastName().type(lastName)

    // createChildPage.elements.dayOfBirthSelect().click()
    createChildPage.elements.dayOfBirthSelect().select(day)
    // createChildPage.elements.monthOfBirthSelect().click()
    createChildPage.elements.monthOfBirthSelect().select(month)
    // createChildPage.elements.yearOfBirthSelect().click()
    createChildPage.elements.yearOfBirthSelect().select(year)

    createChildPage.elements.save().click()
}