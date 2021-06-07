const EMPTY_USERNAME_MESSAGE = 'Looks like you forgot to enter a username!'

describe('Edge and error cases', () => {
  it('displays a message when no username is entered', () => {
    cy.visit('/')
    cy.get('#go').click()

    cy.contains(EMPTY_USERNAME_MESSAGE)
  })
})
