import { childrenPage } from "../page-selectors/ChildrenPage"

export const clickAddChild = () => {
    childrenPage.elements.addChild().click()
    childrenPage.elements.addChildItems('Add Child').click()
}

export const verifyChildExists = ({
    firstName,
    lastName,
}) => {

    childrenPage.elements.childrenData()
        .should('include.text', `${firstName} ${lastName}`)
}