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
    const bookId = req.params.bookId

    Purchase.findOne({where:{user_id: userId, book_id: bookId}})
    .then(purchasedBook => {
        
        if(purchasedBook == null){
            res.json({isPurchased: false})
        } else {
            res.json({isPurchased: true})
        }
    }).catch(e =>{
        //Purchase record was not found
        console.log(e)
        res.json({isPurchased: false})
    })
    
}

purchaseController.rate = (req, res) => {
    const rating = req.body.rating
    const bookId = req.body.bookId
    const userId = req.session.passport.user
    console.log(rating)
    Purchase.findOne({where:{user_id: userId, book_id: bookId}})
    .then(book => {
        book.update({
            rating: rating
        })
    })
    .catch(e => console.log(e))
}
module.exports = purchaseController
