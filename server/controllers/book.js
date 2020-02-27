//TODO: Place books found into db
const Book = require('../models').Book
const fetch = require('node-fetch')
require('dotenv').config();
const key = process.env.GOOGLE_API_KEY


const bookController = {}

bookController.getAllBooks = async (req, res) => {
    try {
        const searchParam = "sorcerer"
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}&key=${process.env.GOOGLE_API_KEY}`)
        const data = await response.json()
        res.json(data)
    } catch(e){
        console.log(e)
    }
}


module.exports = bookController