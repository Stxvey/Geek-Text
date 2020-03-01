const User = require('../models').User
const bcrypt = require('bcryptjs')
const passport = require('passport')


const userController = {}


userController.register = async (req, res) => {
    console.log(req.body)
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

// userController.login = (req, res) => {
//     User.findOne({where: {username: req.body.username}})
//     .then(user => {
//         if(user){
//             const validation = user.validatePassword(req.body.password)
//             if (validation){
//                 res.send('correct pass')
//             } else {
//                 res.send('incorrect pass')
//             }
//         } else {
//             res.send('User could not be found')
//         }
//     })
// }

userController.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'})

module.exports = userController