import { createEmployeePage } from "../page-selectors/CreateEmployeePage"
import {
    employeeRoles,
    engagementTypes
} from "../constants"

export const addEmployee = ({
    firstName,
    lastName,
    email,
    role = employeeRoles.LEAD_TEACHER,
    engagement = engagementTypes.FULL_TIME
}) => {
    createEmployeePage.elements.firstName().type(firstName)
    createEmployeePage.elements.lastName().type(lastName)
    createEmployeePage.elements.email().type(email)
    createEmployeePage.elements.select('Role').select(role)
    createEmployeePage.elements.select('Engagement').select(engagement)
    createEmployeePage.elements.skipAndSave().click()

}