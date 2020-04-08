'use strict';

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        cartItems: {
            type: DataTypes.JSON
        }
    })
    return Cart
}