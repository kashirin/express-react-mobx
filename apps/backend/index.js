import express from 'express'
const app = express()
const port = 3046

app.get('/api/hello', (req, res) => {
  res.send('Hello World from mobxapp api!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})