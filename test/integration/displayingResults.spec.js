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
      { language: 'PHP' }
    ]
  ).as('getRepos')
}

describe('Displaying languages', () => {
  it('displays the favourite language based on the user name', () => {
    mockApiRequest('aj8gh')

    cy.visit('/')

    cy.get('#username').type('aj8gh')
    cy.get('#go').click()

    cy.contains('Favourite language: Java')

    cy.wait('@getRepos').its('request.url')
      .should('include', '/aj8gh/repos?per_page=999')
  })

  it('displays the other languages and how many repos in each', () => {
    mockApiRequest('aj8gh')

    cy.visit('/')

    cy.get('#username').type('aj8gh')
    cy.get('#go').click()

    cy.contains('PHP - 1 repository')
    cy.contains('Go - 1 repository')

    cy.wait('@getRepos').its('request.url')
      .should('include', '/aj8gh/repos?per_page=999')
  })
})
