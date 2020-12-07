import { kioskStartPage } from "../page-selectors/KioskStartPage"

export const verifyStartPageElements = () => {
    kioskStartPage.elements.start().should('exist')
}