const LocalStrategy = require('passport-local').Strategy
const User = require('../models').User

function initialize(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    },
        function(email, password, done) {
            User.findOne({where: {email: email}})
            .then(user => {
                if(user){
                    if(user.validatePassword(password)){
                        console.log('successful login')
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Incorrect Password.'})
                    }
                } else {
                    return done(null, false, {message: "No username found"})
                }
            })
    }))
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findOne({where: {id: id}}).then(function(user) {
            if(user) {
                console.log(user)
                done(null, user.get())
            } else {
                done(user.errors, null)
            }
        })
    })
}

module.exports = initialize