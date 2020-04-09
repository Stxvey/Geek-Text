const Book = require('../models').Book
const Wishlist = require('../models').Wishlist

const wishlistController = {}

wishlistController.addItem = (req, res) => {

}

wishlistController.moveItem = (req, res) => {

}

wishlistController.removeItem = (req, res) => {

}

wishlistController.moveToShoppingCart = (req, res) => {

}

wishlistController.findWishlist = (req, res) => {
    const userId = req.session.passport.user
    resp = []
    Wishlist.findAll({where: {id: userId}})
    .then(wishlistItems => {
        wishlistItems.forEach(item => {
            Book.findOne({where: {id: item.book_id}})
            .then(book => {
                resp.push(book)
            })
        })
        res.json(resp)
    })
    .catch(e => {
        console.log('user has no items in wishlist i guess')
    })
}

module.exports = wishlistController