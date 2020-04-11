const Creditcard = require('../models').Creditcard

const creditcardController = {}

creditcardController.addCreditcard = (req, res) => {
    const userId = req.session.passport.user
    const {full_name, cc_num, zip, expirationDate, security_num} = req.body
    Creditcard.create({
        user_id: userId,
        fullName: full_name,
        cc_num: cc_num,
        zip: zip,
        expirationDate: expirationDate,
        security_num: security_num
    })
    .then(res.send('success'))
    .catch(e => console.log(e))
}

creditcardController.findAll = (req, res) => {
    const userId = req.session.passport.user
    Creditcard.findAll({where: {user_id: userId}, raw: true})
    .then(creditcards => {
        res.json(creditcards)
    })
    .catch(e => console.log(e))
}

module.exports = creditcardController