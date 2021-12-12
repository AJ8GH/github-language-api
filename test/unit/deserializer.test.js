import { expect } from 'chai'
import Deserializer from '../../app/static/js/Deserializer.js'

describe('Deserializer', () => {
  describe('parse', () => {
    it('returns languages with their count, sorted by favouite', () => {
      const deserializer = new Deserializer()

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

      expect(deserializer.deserialize(response)).to.deep.equal(expectedResult)
    })

    it('filters out null language repos', () => {
      const deserializer = new Deserializer()

      const response = [
        { language: null },
        { language: 'JavaScript' },
        { language: null }
      ]

      const expectedResult = [{ language: 'JavaScript', count: 1 }]

      expect(deserializer.deserialize(response)).to.deep.equal(expectedResult)
    })

    it('returns falsey value when user has no languages', () => {
      const deserializer = new Deserializer()

      const response = [{ language: null }]

      expect(deserializer.deserialize(response)).to.equal(undefined)
    })
  })
})
