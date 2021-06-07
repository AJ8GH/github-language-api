import { expect } from 'chai'
import GithubDataParser from '../../app/static/js/models/githubDataParser.js'

describe('GithubDataParser', () => {
  describe('parse', () => {
    it('returns languages with their count, sorted by favouite', () => {
      const githubDataParser = new GithubDataParser()

      const response = [
        { language: 'Ruby' },
        { language: 'JavaScript' },
        { language: 'Python' },
        { language: 'JavaScript' }
      ]

      const expectedResult = [
        { language: 'JavaScript', count: 2 },
        { language: 'Python', count: 1 },
        { language: 'Ruby', count: 1 }
      ]

      expect(githubDataParser.parse(response)).to.deep.equal(expectedResult)
    })

    it('filters out null language repos', () => {
      const githubDataParser = new GithubDataParser()

      const response = [
        { language: null },
        { language: 'JavaScript' },
        { language: null }
      ]

      const expectedResult = [{ language: 'JavaScript', count: 1 }]

      expect(githubDataParser.parse(response)).to.deep.equal(expectedResult)
    })

    it('returns falsey value when user has no languages', () => {
      const githubDataParser = new GithubDataParser()

      const response = [{ language: null }]

      expect(githubDataParser.parse(response)).to.equal(undefined)
    })
  })
})
