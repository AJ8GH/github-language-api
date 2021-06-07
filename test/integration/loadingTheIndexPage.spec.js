const PLACEHOLDER = 'Enter a GitHub username'

describe('Index page', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('has a helpful placeholder', () => {
    cy.visit('/')
    cy.get('#username')
      .should('have.attr', 'placeholder', PLACEHOLDER)
  })
})
