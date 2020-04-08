const User = require('../models').User
const bcrypt = require('bcryptjs')
const passport = require('passport')


const userController = {}

userController.findUser = (req, res) => {
    User.findOne({where: {id: req.session.passport.user}})
     .then(user => {
         if (user) {
             const {firstName, lastName, email} = user.dataValues
             const data = {
                 firstName,
                 lastName,
                 email
             }
             res.send(data)
         } else {
             console.log('user not found')
         }
     })
    console.log(req.session)
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
module.exports = userController