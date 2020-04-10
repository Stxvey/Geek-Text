const User = require('../models').User
const bcrypt = require('bcryptjs')
const passport = require('passport')


const userController = {}

userController.findUser = (req, res) => {
    User.findOne({where: {id: req.session.passport.user}, raw:true})
     .then(user => {
         if (user) {
             res.send(user)
         } else {
             console.log('user not found')
         }
     })
     .catch(e => {
         console.log("can't find user")
     })
    
}
userController.register = async (req, res) => {
    const hashedPass = await bcrypt.hash(req.body.password, 8)
    User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPass
    })
    .then(user => {
        res.send('successfully created user')
    })
    .catch(function(e) {
        console.log(e)
        res.status(400).send('Email has already been taken')
    })
}

userController.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'})
    
userController.logout = (req, res) => {
    req.session.destroy(() => {
        res.send('session has been destroyed')
    })
}
module.exports = userController