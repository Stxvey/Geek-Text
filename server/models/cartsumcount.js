'use strict';

module.exports = (sequelize, DataTypes) => {
    const CartSumCount = sequelize.define('CartSumCount' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        book_id: {
            type: DataTypes.INTEGER
        },
        GroupPrice: {
            type: DataTypes.DOUBLE
        },
        Quantity: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    
    return CartSumCount
}