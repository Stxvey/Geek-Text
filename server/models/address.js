'use strict';

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        streetAddress: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING
        }, 
        zip: {
            type:DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    
    return Address
}