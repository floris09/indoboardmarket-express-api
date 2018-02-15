const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('./config/auth')
const { users, sessions } = require('./routes')
const http = require('http')

const port = process.env.PORT || 3030

const app = express()
const server = http.Server(app)

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  .use(users)
  .use(sessions)

  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

server.listen(port)
