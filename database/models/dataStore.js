'use strict';
module.exports = (sequelize, DataTypes) => {
  var Data_Store = sequelize.define('Data_Store', {
    data_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    user_id: DataTypes.INTEGER,
    g_sheets_url: DataTypes.STRING,
    network_file: DataTypes.STRING
  }, {});
  Data_Store.associate = function(models) {
    // Data_Store.belongsTo(models.User, {
    //   foreignKey: models.User.user_id
    // });
  };
  return Data_Store;
};