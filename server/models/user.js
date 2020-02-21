var bcrypt = require('bcryptjs')
'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: null
    },
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
      }
  });
  //Here's where you define any fk
  User.associate = function(models) {
    // associations can be defined here
  };
  //TODO: replace with async because it is more efficient
  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }
  User.prototype.generateHash = function(password) {
    return bcrypt.hash(password, bcrypt.genSaltSync(8))
  }
  return User;
};