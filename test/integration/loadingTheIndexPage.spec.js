const INSTRUCTION =
'Enter a GitHub username'

describe('Index page', () => {
  it('loads successfully', () => {
    cy.visit('/')
  })

  it('gives a description of the app and how to use it', () => {
    cy.visit('/')
    cy.contains(INSTRUCTION)
  })
})
