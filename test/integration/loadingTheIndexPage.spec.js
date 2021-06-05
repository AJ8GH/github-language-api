const INSTRUCTION =
'Enter a GitHub username and click go!'

describe('Index page', () => {
  it('gives a description of the app and how to use it', () => {
    cy.visit('/')
    cy.contains(INSTRUCTION)
  })
})
