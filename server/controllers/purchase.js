const Purchase = require('../models').Purchase

const purchaseController = {}

purchaseController.purchaseBook = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.bookId
    Purchase.create({
        user_id: userId,
        book_id: bookId
    })
    .then(res.send('success!'))
    .catch(e => console.log(e))
}

purchaseController.hasPurchased = (req, res) => {
    const userId = req.session.passport.user
    const bookId = req.body.bookId
    Purchase.findOne({where:{user_id: userId, book_id: bookId}})
    .then(purchasedBook => {
        res.send(true)
    }).catch(e =>{
        //Purchase record was not found
        res.send(false)
    })
    
}
module.exports = purchaseController
