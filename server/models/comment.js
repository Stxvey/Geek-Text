'use strict';

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        book_id: {
            type: DataTypes.INTEGER
        },
        content: {
            type: DataTypes.TEXT
        },
        displayName: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    
    return Comment
}