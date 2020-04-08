const router = require('express').Router();

//Import controllers to handle requests
const userController = require('../controllers/user')
const bookController = require('../controllers/book')
const cartController = require('../controllers/cart')

//Book Routes
router.get('/books/all', bookController.getAllBooks)

//User Routes
router.get('/user/findUser', userController.findUser)
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)

//Cart Routes
router.post('/cart/findCart', cartController.addItem)

module.exports = router