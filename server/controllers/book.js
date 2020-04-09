//TODO: Place books found into db
const Book = require('../models').Book
const Rating = require('../models').Rating
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')



const bookController = {}

bookController.getAllBooks = (req, res) => {
        // fs.readFile(path.join(__dirname, '../books.json'), (err, json) => {
        //     if(err) throw err;
        //     let obj = JSON.parse(json)
        //     res.json(obj)
        // })
        resp = {}
        Book.findAll({limit: 10}).then(data => res.json(data))
}

bookController.rateBook = (req, res) => {
        userId = req.session.passport.user
        bookId = req.body.book_id
        rating = req.body.rating
        Rating.create({
                user_id: userId,
                book_id: bookId,
                rating: rating
        })
        .then(rating => {
                res.send('Successfully rated the book')
        })
        .catch((e) => {
                console.log('there was some error rating the book')
        })
}

bookController.rating = (req, res) => {
        book_id = req.body.book_id
        Rating.findAll({where:{book_id: book_id}})
        .then(ratings => {
                let sum = 0
                let amountOfRatings = ratings.length
                ratings.forEach((entry) => {
                        sum += entry.rating
                })
                average = sum/amountOfRatings
                res.json({averageRatings: average})
        })
}


module.exports = bookController