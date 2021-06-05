import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../App.js'

chai.use(chaiHttp)

describe('App', () => {
  describe('/', () => {
    it('reponds with 200', (done) => {
      const server = chai.request(app)
      server.get('/')
        .end((err, response) => {
          expect(response.status).to.equal(200)
          done()
          server.close()
        })
    })
  })
})
