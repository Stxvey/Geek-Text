const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
require('dotenv').config();

const passportConfig = require('./config/passport')
// passportConfig(passport)

const app = express()
app.use(bodyParser.json())


//Routes
const indexRouter = require('./routes')
app.use('/', indexRouter)

//Passport inits
app.use(passport.initialize())
app.use(passport.session())

//Only run this if you alter a table, this will CREATE TABLE IF NOT EXISTS
// const models = require('./models')
// models.sequelize.sync().then(console.log('creating tables'))


app.listen(3001, ()=> {console.log('listening on port 3001')})