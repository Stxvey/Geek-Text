const Address = require('../models').Address

const addressController = {}

addressController.addAddress = (req, res) => {
    const {streetAddress, city, state, zip} = req.body
    const userId = req.session.passport.user
    Address.create({
        user_id: userId,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zip: zip
    })
    .then(res.send('success'))
    .catch(e => console.log(e))
}
addressController.findAddresses = (req, res) => {
    const userId = req.session.passport.user
    Address.findAll({where: {user_id: userId}, raw: true})
    .then(addresses => {
        res.json(addresses)
    })
    .catch(e => console.log(e))
}

module.exports = addressController