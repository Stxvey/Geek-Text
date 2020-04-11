const Book = require('../models').Book
const Cart = require('../models').Cart

const cartController = {}

cartController.getCart = (req, res) => {
    const userId = req.session.passport.user
    // const userId = req.body.userid
    var resp = []
    Cart.findAll({where: {user_id: userId}, raw: true})
    .then(cartItems => {
        cartItems.forEach(item => {
            Book.findOne({where: {id: item.book_id}, raw:true})
            .then(book => {
                resp.push(book)
            })
        })
        setTimeout(() => {
            res.json(resp)
        }, 1000)
    })
    
}

cartController.addItem = (req, res) => {
    console.log('we are HERE')
    const userId = req.session.passport.user
    const bookId = req.body.book_id
    Cart.create({
        user_id: userId,
        book_id: bookId
    })
    .then(res.send('success!'))
    .catch(e => console.log(e))
}

cartController.removeItem = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.book_id
    Cart.findOne({where: {user_id: userId, book_id: bookId}})
    .then(entry => {
        entry.destroy()
        res.json({})
    })
    .catch(e => {
        console.log('i did not find the entry')
        res.send('could not find the entry')
    })
}

module.exports = cartController