import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../app/app.js'

chai.use(chaiHttp)
chai.should()

describe('App', () => {
  describe('GET /', () => {
    describe('When route is valid', () => {
      it('reponds with 200', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            if (err) { console.error(`Error connecting to server: ${err}`) }
            res.status.should.be.equal(200)
            done()
          })
      })
    })

    describe('When route is invalid', () => {
      it('reponds with 404', (done) => {
        chai.request(app)
          .get('/index')
          .end((err, res) => {
            if (err) { console.error(`Error connecting to server: ${err}`) }
            res.status.should.be.equal(404)
            done()
          })
      })
    })
  })
})
