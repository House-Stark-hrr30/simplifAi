'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var db        = {};

let config = {};

if(process.env.NODE_ENV === 'production') {
  //config = process.env.DB_CONFIG;
  config['username'] = process.env.DB_USERNAME;
  config['password'] = process.env.DB_PASSWORD;
  config['database'] = "heroku_9cbde74996b3fda";
  config['host'] = process.env.DB_HOST;
  config['dialect'] = "mysql";
    // "username": "",
    // "password": "",
    // "database": "",
    // "host": "",
    // "dialect": ""

} else {
  config = require(__dirname + '/../../../config.js').db_config[env];
}



var sequelize = new Sequelize(config.database, config.username, config.password, config);


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .sync({force: false});

module.exports = db;