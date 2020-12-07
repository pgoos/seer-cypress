import { welcomePage } from "../page-selectors/WelcomePage"
import { businessProfilePage } from "../page-selectors/BusinessProfilePage"

export const proceedFromWelcomePage = () => {
    welcomePage.elements.continue().click()
}

export const setDaycareName = (name) => {
    businessProfilePage.elements.daycareName().clear().type(name)
}

export const setDaycareTimezone = (timezone) => {
    businessProfilePage.elements.daycareTimezone().select(timezone)
    // businessProfilePage.elements.daycareTimezone().selectNth(2)
}

export const addOperatingHours = (schedule) => {
    businessProfilePage.elements.operatingHoursAdd().click()
}