'use strict';

module.exports = (sequelize, DataTypes) => {
    const Rating = sequelize.define('Rating' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        book_id: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Rating
}