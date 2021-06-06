import GithubDataParser from './githubDataParser.js'

const dataParser = new GithubDataParser()

document.getElementById('go').addEventListener('click', () => {
  getUserRepos()
})

async function getUserRepos () {
  const response = await fetch('https://api.github.com/users/aj8gh/repos?per_page=999')
  response.json()
    .then(repos => parseAndDisplayResults(repos))
}

function parseAndDisplayResults (languages) {
  const languageCount = dataParser.parse(languages)
  console.log(languageCount)
  const element = document.getElementById('languages')
  element.innerHTML = `<p>Favourite language: ${languageCount[0].language}<p>`
}
