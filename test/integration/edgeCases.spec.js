import {
  EMPTY_USERNAME_MESSAGE,
  NO_LANGUAGE_MESSAGE,
  ERROR_MESSAGE
} from './translations/enGb.js'

function mockApiRequest (user) {
  cy.intercept(
    {
      method: 'GET',
      url: `https://api.github.com/users/${user}/repos?per_page=999`
    },
    [{ language: null }]
  ).as('getRepos')
}

describe('Edge and error cases', () => {
  it('displays a message when no username is entered', () => {
    cy.visit('/')
    cy.get('#go').click()

    cy.contains(EMPTY_USERNAME_MESSAGE)
  })

  it('displays a message when user has no languages', () => {
    mockApiRequest('aj8gh')

    cy.visit('/')
    cy.get('#username').type('aj8gh')
    cy.get('#go').click()

    cy.contains(NO_LANGUAGE_MESSAGE)

    cy.wait('@getRepos').its('request.url')
      .should('include', '/aj8gh/repos?per_page=999')
  })

  it('displays a message when username is invalid', () => {
    mockApiRequest('invlaid username')

    cy.visit('/')
    cy.get('#username').type('invalid username')
    cy.get('#go').click()

    cy.contains(ERROR_MESSAGE)
  })
})
