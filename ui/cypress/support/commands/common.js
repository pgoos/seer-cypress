import { commonElements } from "../page-selectors/CommonElements"

export const signOut = () => {
    commonElements.elements.loggedUserAvatar().click()
    commonElements.elements.signOut().click()
}