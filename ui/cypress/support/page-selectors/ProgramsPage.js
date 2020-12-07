export class ProgramsPage {
    constructor() {
        this.elements = {
            create: () => cy.get("a[href = '/programs/regular/create']"),
            program: (name) => cy.get('div.row.border-top-0.border-bottom-0')
                                .eq(1)
                                .find('h4')
                                .contains(name)
        }
    }
}

export const programsPage = new ProgramsPage()