'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isbn: {
            type: DataTypes.STRING
        },
        pageCount: {
            type: DataTypes.INTEGER
        },
        shortDescription: {
            type: DataTypes.TEXT
        },
        longDescription: {
            type: DataTypes.TEXT
        },
        genre: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    return Book
}