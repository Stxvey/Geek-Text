'use strict';

module.exports = (sequelize, DataTypes) => {
    const Creditcard = sequelize.define('Creditcard' , {
        user_id: {
            type: DataTypes.INTEGER
        },
        fullName: {
            type:DataTypes.STRING
        },
        cc_num: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.STRING
        }, 
        expirationDate: {
            type:DataTypes.STRING
        },
        security_num: {
            type:DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    })
    
    return Creditcard
}