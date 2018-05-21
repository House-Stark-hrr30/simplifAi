'use strict';

import bcrypt from 'bcryptjs';

export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 75]
      }
    },
    googleId: DataTypes.STRING
  }, {
      freezeTableName: true,
      hooks: {
        afterValidate: function (user) {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
        }
      },
      instanceMethods: {
        checkPassword(password) {
          console.log('Checking passwords...');
          return bcrypt.compare(password, this.password);
        }
      }
    });
  User.associate = function (models) {
    User.hasMany(models.Data_Store, {
      foreignKey: models.Data_Store.data_id
    });
  };
  return User;
}

// * call instance methods using: models.User.find(<username>).success((user) => user.<method_call>(<parameter>));