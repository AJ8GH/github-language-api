import GithubDataParser from './models/githubDataParser.js'

const EMPTY_USERNAME_MESSAGE = 'Looks like you forgot to enter a username!'
const NO_LANGUAGE_MESSAGE = 'Looks like this user has not committed any code.'
const ERROR_MESSAGE = 'Something went wrong... are you sure that user exists?'
const END_POINT = 'https://api.github.com/users/'
const QUERY = '/repos?per_page=999'

const dataParser = new GithubDataParser()

document.getElementById('go').addEventListener('click', () => {
  const username = document.getElementById('username').value
  if (!username) { return handleNullInput() }

  document.getElementById('user')
    .innerHTML = `<p class="user">${username}<p>`
  getUserRepos(username)
})

async function getUserRepos (username) {
  try {
    const response = await fetch(`${END_POINT}${username}${QUERY}`)
    if (response.status !== 200) { return handleErrors() }
    response.json().then(data => parseAndDisplayResults(data))
  } catch (error) {
    console.error(error)
  }
}

function parseAndDisplayResults (languages) {
  const languageCount = dataParser.parse(languages)
  if (!languageCount) { return handleNoLanguages() }

  console.log(languageCount)

  const element = document.getElementById('languages')
  element.innerHTML =
  `<p class="favourite">Favourite language: ${languageCount[0].language}<p/>`

  displayLanguageCount(languageCount, element)
}

function displayLanguageCount (languageCount, element) {
  languageCount.forEach(languageObject => {
    const { language, count } = languageObject
    const repos = (count > 1) ? 'repositories' : 'repository'
    element.innerHTML +=
    `<p class="language"> ${language} - ${count} ${repos}<p/>`
  })
}

function handleNullInput () {
  document.getElementById('user')
    .innerHTML = `<p class="message">${EMPTY_USERNAME_MESSAGE}<p>`
}

function handleNoLanguages () {
  document.getElementById('languages')
    .innerHTML = `<p class="message">${NO_LANGUAGE_MESSAGE}<p>`
}

function handleErrors () {
  document.getElementById('user')
    .innerHTML = `<p class="message">${ERROR_MESSAGE}<p>`
}
