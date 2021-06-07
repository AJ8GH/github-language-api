const FAVOURITE_LANGUAGE_MESSAGE = "User aj8gh's favourite language is Java"

function mockApiRequest (user) {
  cy.intercept(
    {
      method: 'GET',
      url: `https://api.github.com/users/${user}/repos?per_page=999`
    },
    [
      { language: 'Java' },
      { language: 'Java' },
      { language: 'Go' },
      { language: 'PHP' },
      { language: 'Java' },
      { language: 'Ruby' },
      { language: 'Ruby' }
    ]
  ).as('getRepos')
}

describe('Displaying languages', () => {
  it('displays the favourite language based on the user name', () => {
    mockApiRequest('aj8gh')

    cy.visit('/')

    cy.get('#username').type('aj8gh')
    cy.get('#go').click()

    cy.contains(FAVOURITE_LANGUAGE_MESSAGE)

    cy.wait('@getRepos').its('request.url')
      .should('include', '/aj8gh/repos?per_page=999')
  })

  it('displays all languages and their count in order', () => {
    mockApiRequest('aj8gh')

    cy.visit('/')

    cy.get('#username').type('aj8gh')
    cy.get('#go').click()

    cy.contains('Java - 3 repositories')
    cy.contains('Ruby - 2 repositories')
    cy.contains('PHP - 1 repository')
    cy.contains('Go - 1 repository')

    cy.wait('@getRepos').its('request.url')
      .should('include', '/aj8gh/repos?per_page=999')
  })
})
