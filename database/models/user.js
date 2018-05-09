'use strict';

const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.DATE,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.DATE,
        field: 'last_name'
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true,
    instanceMethods: {
        generateHash(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
        }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  return User;
}

// ? call instance methods using: models.User.find(<username>).success((user) => user.<method_call>(<parameter>));