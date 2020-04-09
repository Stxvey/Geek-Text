const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
require('dotenv').config();
const sessionStore = require('./models').sessionStore

const initialize = require('./config/passport')
initialize(passport)
const app = express()
app.use(session({
    secret: 'LetsGetThisBread',
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())


//Routes
const indexRouter = require('./routes')
app.use('/', indexRouter)


//Only run this if you alter a table, this will CREATE TABLE and DROP a table if it already exists
// const models = require('./models')
// models.sequelize.sync({force: true}).then(console.log('creating tables'))


app.listen(3001, ()=> {console.log('Listening on port 3001')})