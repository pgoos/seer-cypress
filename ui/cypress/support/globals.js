cy.window().then((win) => {
    cy.spy(win.console, "log")
})