import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import app from '../App.js'

chai.use(chaiHttp)

describe('App', () => {
  describe('GET /', () => {
    it('reponds with 200', (done) => {
      const server = chai.request(app)

      server.get('/')
        .end((err, response) => {
          if (err) { console.error(`Error connecting to server: ${err}`) }

          expect(response.status).to.equal(200)

          done()
          server.close()
        })
    })

    it('reponds with 404 when address is wrong', (done) => {
      const server = chai.request(app)

      server.get('/index')
        .end((err, response) => {
          if (err) { console.error(`Error connecting to server: ${err}`) }

          expect(response.status).to.equal(404)

          done()
          server.close()
        })
    })
  })
})
