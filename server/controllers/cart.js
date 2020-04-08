const User = require('../models').User
const Cart = require('../models').Cart

const cartController = {}

cartController.getCart = async (req, res) => {
    try {
        User.findOne({where: {id: req.session.passport.user}})
        .then(user => {
            if(user) {
                Cart.findOne({where: {id: user.dataValues.id}})
                .then(cart => {
                    if(cart) {
                        //cart was found
                    } else {
                        //User has nothing in their cart
                    }
                })
            }
        })
    } catch(e) {
        console.log(e)
    }
}

cartController.addItem = () => {
    try {
        User.findOne({where: {id: req.session.passport.user}})
        .then(user => {
            if(user) {
                Cart.findOne({where: {id: user.dataValues.id}})
                .then(cart => {
                    if(cart) {
                        //cart was found
                    } else {
                        //User has nothing in their cart
                    }
                })
            }
        })
    } catch(e) {
        console.log(e)
    }
}

module.exports = cartController