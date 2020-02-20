const router = require('express').Router();
const User = require('../models').User

require('dotenv').config();

//Book Routes
router.get('/books', (req, res) => {
    res.send('Hello from books!')
    // https.get(`https://www.googleapis.com/books/v1/volumes?q=calculus&key=${process.env.GOOGLE_API_KEY}`, (res) => {
    //     console.log(resp.statusCode)
    // })
})

//User Routes
router.get('/user', async (req, res) => {
    res.send('Hello from user!')
    const carolina = await User.create({firstName: "Carolina", lastName: "Duran", email: "Cdura036@fiu.edu", password: "password"})
    console.log('Carolinas auto gen id is ', carolina.id)
})

module.exports = router