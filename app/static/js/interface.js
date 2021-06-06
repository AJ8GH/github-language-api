import GithubDataParser from './models/GithubDataParser.js'

const END_POINT = 'https://api.github.com/users/'
const QUERY = '/repos?per_page=999'
const dataParser = new GithubDataParser()

document.getElementById('go').addEventListener('click', () => {
  const username = document.getElementById('username').value
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
  element.innerHTML = `<p>Favourite language: ${languageCount[0].language}<p>`
}
