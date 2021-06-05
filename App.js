import express from 'express'

const MESSAGE = 'Server listening at '
const END_POINT = 'http://localhost:'
const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('ok')
})

app.listen(PORT, () => console.log(`${MESSAGE}${END_POINT}${PORT}`))

export default app