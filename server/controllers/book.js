//TODO: Place books found into db
const Book = require('../models').Book
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')



const bookController = {}

bookController.getAllBooks = (req, res) => {
        fs.readFile(path.join(__dirname, '../books.json'), (err, json) => {
            if(err) throw err;
            let obj = JSON.parse(json)
            res.json(obj)
        })
}


module.exports = bookController