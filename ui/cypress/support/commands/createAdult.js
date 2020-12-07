import { createAdultPage } from "../page-selectors/CreateAdultPage"

export const addAdult = ({
    firstName,
    lastName,
    email
}) => {
    createAdultPage.elements.firstName().type(firstName)
    createAdultPage.elements.lastName().type(lastName)
    createAdultPage.elements.email().type(email)
    createAdultPage.elements.add().click()
}