const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const models = require('../models')

passport.use(new LocalStrategy(function(username, password, done) {
    models.User
    .find({where: {username: username}})
    .then(function(user) {
        if(!user) {
            return done(null, false, {message: 'Username not found'})
        }
        models.User.comparePassword(password, user.password, function(err, isMatch) {
            if (err) {
                return done(err)
            }
            if(isMatch) {
                return done(null, user)
            } else {
                return done(null, false, {message: 'Invalid password'})
            }
        })
    })
    .catch(function(err) {
        done(err)
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user.id)
})