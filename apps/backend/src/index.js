import express from 'express'
const app = express()
const port = 3046

import {getProfile, saveProfile} from './handlers/profile'
import {getMessages, addMessage} from './handlers/messages'

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(cookieParser())
const jsonParser = bodyParser.json( {limit: '50mb', extended: true} )
app.use(jsonParser)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type","application/json");
  next();
});



app.get('/api/hello', (req, res) => {
  res.send('Hello World from mobxapp api!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.get('/api/profile', getProfile)

app.post('/api/profile', saveProfile)

app.get('/api/messages', getMessages)

app.post('/api/add-message', addMessage)