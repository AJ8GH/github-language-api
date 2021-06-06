import GithubDataParser from './models/githubDataParser.js'

const END_POINT = 'https://api.github.com/users/'
const QUERY = '/repos?per_page=999'
const dataParser = new GithubDataParser()

document.getElementById('go').addEventListener('click', () => {
  const username = document.getElementById('username').value
  document.getElementById('user')
    .innerHTML = `<p class="user">${username}<p>`
  getUserRepos(username)
})

async function getUserRepos (username) {
  const response = await fetch(`${END_POINT}${username}${QUERY}`)
  response.json()
    .then(repos => parseAndDisplayResults(repos))
}

function parseAndDisplayResults (languages) {
  const languageCount = dataParser.parse(languages)
  console.log(languageCount)

  const element = document.getElementById('languages')
  element.innerHTML =
  `<p class="favourite">Favourite language: ${languageCount[0].language}<p/>`

  displayLanguageBreakdown(languageCount, element)
}

function displayLanguageBreakdown (languageCount, element) {
  languageCount.forEach(languageObject => {
    const { language, count } = languageObject
    const repos = (count === 1) ? 'repository' : 'repositories'
    element.innerHTML +=
    `<p class="language"> ${language} - ${count} ${repos}<p/>`
  })
}
