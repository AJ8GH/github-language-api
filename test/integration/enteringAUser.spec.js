describe('Entering a user', () => {
  it('lets you enter a github username', () => {
    cy.visit('/')

    cy.get('#username').should('not.have.value', 'aj8gh')
      .type('aj8gh')

    cy.get('#username').should('have.value', 'aj8gh')
  })

  it('lets you click go', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.github.com/users/aj8gh/repos?per_page=999'
    })

    cy.visit('/')

    cy.get('#username').type('aj8gh')

    cy.get('#go').click()
  })
})
