const END_POINT = 'https://api.github.com/users/'
const QUERY = '/repos?per_page=999'

export default class GitHubClient {
  async getRepositories (username) {
    try {
      const response = await fetch(`${END_POINT}${username}${QUERY}`)
      return response
    } catch (error) {
      console.error(error)
    }
  }
}
