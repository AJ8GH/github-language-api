import { expect } from 'chai'
import GithubDataParser from '../../app/static/js/githubDataParser.js'

const response = [
  { language: 'Ruby' },
  { language: 'JavaScript' },
  { language: 'Python' },
  { language: 'JavaScript' }
]

describe('GithubDataParser', () => {
  describe('parse', () => {
    it('returns array of objects with a count of each language', () => {
      const githubDataParser = new GithubDataParser()

      const expectedResult = [
        { language: 'JavaScript', count: 2 },
        { language: 'Python', count: 1 },
        { language: 'Ruby', count: 1 }
      ]

      expect(githubDataParser.parse(response)).to.deep.equal(expectedResult)
    })
  })
})
