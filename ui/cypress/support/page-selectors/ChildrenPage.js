export class ChildrenPage {
    constructor() {
        this.elements = {
            addChild: () => cy.get('button').contains('Add Child'),
            addChildItems: (text) => cy.get('.dropdown-item').contains(text),
            childrenData: () => cy.get('table tbody tr')
        } 
    }
}

export const childrenPage = new ChildrenPage()