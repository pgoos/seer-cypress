import { createProgramPage } from "../page-selectors/CreateProgramPage";
import { programsPage } from "../page-selectors/ProgramsPage";

export const setProgramSchedule = (days) => {
    createProgramPage.elements.daysPicker().click()
    days.forEach(day => {
        createProgramPage.elements.days(day).click()    
    });
    createProgramPage.elements.close().click()
    
    createProgramPage.elements.from().click()
    createProgramPage.elements.hours().first().click()
    createProgramPage.elements.minutes().first().click()
    
    createProgramPage.elements.to().click()
    createProgramPage.elements.hours().last().click()
    createProgramPage.elements.minutes().last().click()
}

export const createProgramWithFlatRate = ({
    rate,
    name,
    days,
}) => {
    createProgramPage.elements.name().type(name)
    
    setProgramSchedule(days)

    createProgramPage.elements.weeklyRate().type(rate)

    createProgramPage.elements.save().click()

    programsPage.elements.program(name).should('exist')
}

export const createProgramPriceBasedOnNumberOfDays = ({
    daysRates,
    name,
    days
}) => {
    createProgramPage.elements.name().type(name)
    
    setProgramSchedule(days)

    createProgramPage.elements.priceByNumberOfDays().click()
    daysRates.forEach(dayRate => {
        createProgramPage.elements.daysAWeek(dayRate.days).click()
        createProgramPage.elements.priceByDaysAWeek(dayRate.days).type(dayRate.rate)
    })

    createProgramPage.elements.save().click()

    programsPage.elements.program(name).should('exist')
}