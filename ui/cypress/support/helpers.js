export const testUrl = (expectedUrl) => {
    let url
    const pattern = new RegExp(`${expectedUrl}$`)
    
    cy.url().then(($url) => url = $url)
    
    return url.test(pattern)
}

export const extractColumnValues = (tableLocator, columnIndex) => {
    let columnValues = []
    
    tableLocator.each(($row) => {
        cy.wrap($row)
            .find('td')
            .eq(columnIndex)
            .invoke('text')
            .then((text) => columnValues.push(text))
    })

    return columnValues
}