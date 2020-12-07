import { adultsPage } from "../page-selectors/AdultsPage"

export const clickAddAdult = () => {
    adultsPage.elements.addAdult().click()
    adultsPage.elements.addAdultItems('Add Adult').click()
}

export const verifyAdultExists = ({
    firstName,
    lastName,
}) => {

    adultsPage.elements.adultsData()
        .should('include.text', `${firstName} ${lastName}`)
}