import { staffPage } from "../page-selectors/StaffPage"
import { selectorAliases } from "../constants"

export const clickAddEmployee = () => {
    staffPage.elements.addEmployee().click()
    staffPage.elements.addEmployeeItems('Add Employee').click()
}

export const getEmployeeCount = () => {
    let employeeCount

    staffPage.elements.employeeData().then(($collection) => employeeCount = $collection.length)

    return employeeCount
}

export const verifyEmployeeExists = ({
    firstName,
    lastName,
}) => {

    staffPage.elements.employeeData()
        .should('include.text', `${firstName} ${lastName}`)
}

export const clickRevealKioskPassword = () => {
    staffPage.elements.revealKioskPassword().click()
}

export const resetKioskPassword = () => {
    staffPage.elements.resetKioskPassword().click()

    staffPage.elements.kioskUserName().invoke('val').then((text) => {
        cy.wrap(text).as(selectorAliases.KIOSK_USERNAME)
    })

    staffPage.elements.kioskPassword().invoke('val').then((text) => {
        cy.wrap(text).as(selectorAliases.KIOSK_PASSWORD)
    })
}

export const createKioskUser = () => {
    staffPage.elements.createKioskUser().click()

    staffPage.elements.kioskUserName().invoke('val').then((text) => {
        cy.wrap(text).as(selectorAliases.KIOSK_USERNAME)
    })

    staffPage.elements.kioskPassword().invoke('val').then((text) => {
        cy.wrap(text).as(selectorAliases.KIOSK_PASSWORD)
    })
}

export const closeKioskModal = () => {
    staffPage.elements.closeKioskModal().click()
}

export const openEmployeePage = (index) => {
    staffPage.elements.employeeLink(index).click()
}