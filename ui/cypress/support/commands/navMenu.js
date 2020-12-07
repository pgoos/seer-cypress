import { navMenu } from "../page-selectors/NavMenu"

export const verifyMenuLoaded = () => {
    navMenu.elements.items().should('have.length.greaterThan', 0)
}