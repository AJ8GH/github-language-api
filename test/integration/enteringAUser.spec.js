describe('Index page', () => {
  it('lets you enter a github username', () => {
    cy.visit('/')

    cy.get('#username').should('not.have.value', 'aj8gh')
      .type('aj8gh')

    cy.get('#username').should('have.value', 'aj8gh')
  })
})
