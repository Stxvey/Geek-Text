'use strict';

module.exports = (sequelize, DataTypes) => {
    const Purchase = sequelize.define('Purchase' , {
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
    
    return Purchase
}