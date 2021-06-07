import GithubDataParser from './models/githubDataParser.js'

const EMPTY_USERNAME_MESSAGE = 'Looks like you forgot to enter a username!'
const NO_LANGUAGE_MESSAGE = 'Looks like this user has not committed any code.'
const ERROR_MESSAGE = 'Something went wrong... are you sure that user exists?'
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

    response.json().then(data => parseAndDisplayResults(data, username))
  } catch (error) {
    console.error(error)
  }
}

function parseAndDisplayResults (languages, username) {
  const languageCount = dataParser.parse(languages)
  if (!languageCount) { return displayMessage(NO_LANGUAGE_MESSAGE) }

  const languageDiv = document.getElementById('languages')
  document.getElementById('user').innerHTML = `<p class="user">${username}<p>`
  displayFavouriteLanguage(languageCount, languageDiv)
  displayLanguageCount(languageCount, languageDiv)
}

function displayFavouriteLanguage (languageCount, languageDiv) {
  languageDiv.innerHTML =
  `<p class="favourite">Favourite language: ${languageCount[0].language}<p/>`
}

function displayLanguageCount (languageCount, languageDiv) {
  languageCount.forEach(languageObject => {
    const { language, count } = languageObject
    const repos = (count > 1) ? 'repositories' : 'repository'
    const content = `<p class="language"> ${language} - ${count} ${repos}<p/>`
    languageDiv.innerHTML += content
  })
}

function displayMessage (message) {
  document.getElementById('user').innerHTML = `<p class="message">${message}<p>`
  clearLanguages()
}

function clearLanguages () {
  document.getElementById('languages').innerHTML = null
}
