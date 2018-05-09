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
      type: DataTypes.String,
      // field: 'first_name', // ? is this necessary?
      validate: {
        notNull: true,
      }
    },
    lastName: {
      type: DataTypes.String,
      // field: 'last_name', // ? is this necessary?
      validate: {
        notNull: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notNull: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    }
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