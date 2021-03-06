'use strict';

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        book_id: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    
    return Cart
}