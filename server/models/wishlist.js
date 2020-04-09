'use strict';

module.exports = (sequelize, DataTypes) => {
    const Wishlist = sequelize.define('Wishlist' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        book_id: {
            type: DataTypes.INTEGER
        }, 
        whichList: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Wishlist
}