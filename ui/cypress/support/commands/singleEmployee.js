import { employeePage } from "../page-selectors/EmployeePage"
import { selectorAliases } from "../constants"

export const revealKioskPin = () => {
    employeePage.elements.revealKioskPin().click()

    employeePage.elements.kioskPin().invoke('text').then((text) => {
        cy.wrap(text).as(selectorAliases.KIOSK_PIN)
    })
}

export const closeKioskPinModal = () => {
    employeePage.elements.closeKioskPin().click()
}