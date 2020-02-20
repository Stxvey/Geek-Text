var bcrypt = require('bcryptjs')
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      freezeTableName: true,
      classMethods: {
        comparePassword: function(password, hash, callback) {
          bcrypt.compare(password, hash, function(err, isMatch) {
            if(err){
              return callback(err, null)
            } else {
              callback(null, isMatch)
            }
          });
        }
      },
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8))
        },
        validPassword(password){
          return bcrypt.compare(password, this.password)
        }
      }
  });
  //Here's where you define any fk
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};