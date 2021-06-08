import GithubDataParser from './models/githubDataParser.js'

import {
  EMPTY_USERNAME_MESSAGE, NO_LANGUAGE_MESSAGE, ERROR_MESSAGE
} from './translations/enGb.js'

const END_POINT = 'https://api.github.com/users/'
const QUERY = '/repos?per_page=999'

const dataParser = new GithubDataParser()

document.getElementById('go').addEventListener('click', () => {
  const username = document.getElementById('username').value
  if (!username) { return displayMessage(EMPTY_USERNAME_MESSAGE) }

  getUserRepos(username)
})

async function getUserRepos (username) {
  try {
    const response = await fetch(`${END_POINT}${username}${QUERY}`)
    if (response.status !== 200) { return displayMessage(ERROR_MESSAGE) }

    response.json().then(data => parseAndDisplayResults(data))
  } catch (error) {
    console.error(error)
  }
}

function parseAndDisplayResults (languages) {
  const languageCount = dataParser.parse(languages)
  if (!languageCount) { return displayMessage(NO_LANGUAGE_MESSAGE) }

  const languageDiv = document.getElementById('languages')
  displayFavouriteLanguage(languageCount, languageDiv)
  displayLanguageCount(languageCount, languageDiv)
}

function displayFavouriteLanguage (languageCount, languageDiv) {
  const username = document.getElementById('username').value

  const content = [
    `<p class="favourite">User <span class="user">${username}</span>'s `,
    `favourite language is ${languageCount[0].language}<p/>`
  ]

  languageDiv.innerHTML = content.join('')
}

function displayLanguageCount (languageCount, languageDiv) {
  languageCount.forEach(languageObject => {
    const { language, count } = languageObject
    const repos = (count > 1) ? 'repositories' : 'repository'

    const content = [
      '<p class="language"><span class="language-name">',
      `${language}</span> - ${count} ${repos}<p/>`
    ]

    languageDiv.innerHTML += content.join('')
  })
}

function displayMessage (message) {
  document.getElementById('languages')
    .innerHTML = `<p class="message">${message}<p>`
}
