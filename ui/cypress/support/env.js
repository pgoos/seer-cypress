export const mapCypressEnvToProcessEnv = (arg) => {
    const envVariables = Cypress.env()

    process.env.API_URL = envVariables.apiUrl
    process.env.BASIC_AUTH_HOST = envVariables.basicAuthHost
    process.env.BASIC_AUTH_LOGIN = envVariables.basicAuthLogin
    process.env.BASIC_AUTH_PASSWORD = envVariables.basicAuthPassword
    process.env.USER_ADMIN_EMAIL = envVariables.adminLogin
    process.env.USER_ADMIN_PASSWORD = envVariables.adminPassword
    process.env.EMAIL_NAMESPACE = envVariables.emailNamespace
    process.env.EMAIL_API_KEY = envVariables.emailApiKey
    process.env.NOTIFICATION_EMAIL = envVariables.notificationEmail

}