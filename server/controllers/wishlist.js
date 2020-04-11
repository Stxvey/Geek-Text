const Book = require('../models').Book
const Wishlist = require('../models').Wishlist

const wishlistController = {}

wishlistController.addItem = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.book_id
    const wishlistNumber = req.body.wishlistNumber
    Wishlist.create({
        user_id: userId,
        book_id: bookId,
        whichList: wishlistNumber
    })
    .then(res.send('success!'))
    .catch(e => console.log(e))
}

wishlistController.moveItem = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.book_id
    const wishlistNum = req.body.wishlistNum

    Wishlist.findOne({where: {user_id: userId, book_id: bookId}})
    .then(entry => {
        entry.update({
            whichList: wishlistNum
        })
        .then(
            res.json({})
        )
    }).catch(e => {
        
    })
}

wishlistController.removeItem = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.book_id
    Wishlist.findOne({where: {user_id: userId, book_id: bookId}})
    .then(entry => {
        entry.destroy()
        res.json({})
    })
    .catch(e => {
        console.log('i did not find the entry')
        res.send('could not find the entry')
    })
}

wishlistController.moveToShoppingCart = (req, res) => {

}

wishlistController.findWishlist = (req, res) => {
    const userId = req.session.passport.user
    var resp = []
    Wishlist.findAll({where: {user_id: userId}, raw: true})
    .then(wishlistItems => {
        wishlistItems.forEach(item => {
            Book.findOne({where: {id: item.book_id}, raw:true})
            .then(book => {
                book.wishlistNumber = item.whichList
                resp.push(book)
            })
        })
        setTimeout(() => {
            res.json(resp)
        }, 1000)
    })
    .then(data => console.log(data))
    // .catch(e => {
    //     console.log('user has no items in wishlist i guess')
    // })
}

module.exports = wishlistController