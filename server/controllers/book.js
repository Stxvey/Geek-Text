const Book = require('../models').Book


const bookController = {}
bookController.getTop = (req, res) => {
        Book.findAll({
                limit:20,
                raw: true
        })
        .then(booksWithTop => {
                res.json(booksWithTop)
        })
}
bookController.getGenre = (req, res) => {
        const i = req.body.genre
        console.log(i)
        Book.findAll({
                limit:20,
                where: {
                        genre: i
                },
                raw: true
        })
        .then(booksWithGenrei => {
                res.json(booksWithGenrei)
        })
}
bookController.getRating = (req, res) => {
        const i = req.body.rate
        Book.findAll({
                limit:20,
                where: {
                        [rate.gte]: i
                },
                raw: true
        })
        .then(booksWithRatei => {
                res.json(booksWithRatei)
        })
}
bookController.getSort = (req, res) => {
        const i = req.body.attribute
        const j = req.body.order
        Book.findAll({
                limit:20,
                order: [
                        [i,j],
                ],
                raw: true
        })
        .then(booksWithGenrei => {
                res.json(booksWithGenrei)
        })
}
bookController.getAllBooks = (req, res) => {


// fs.readFile(path.join(__dirname, '../books.json'), (err, json) => {
//     if(err) throw err;
//     let obj = JSON.parse(json)
//     res.json(obj)
// })
resp = {}
Book.findAll({ limit: 20 }).then(data => res.json(data))
}


module.exports = bookController