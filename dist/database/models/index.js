"use strict";

// import { readdirSync } from "fs";
// import { basename as _basename, join } from "path";
// import Sequelize, { DataTypes } from "sequelize";
// import prop from "../../config/config";
var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || "development";
// const config = prop[env];
var config = require("".concat(__dirname, "/../../config/config.js"))[env];
var db = {};
var sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, {
    dialect: "postgres"
  });
} else {
  sequelize = new Sequelize(
  // config.database,
  // config.username,
  // config.password,
  config);
}
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize.authenticate().then(function () {
  console.log(config, "***");
  console.log(sequelize, "^^^");
  console.log("DATABASE CONNECTED SUCCESSFULLY! 👍");
})["catch"](function (err) {
  console.log(config, "***");
  console.log(sequelize, "^^^");
  console.error("DATABASE  FAILED TO CONNECT! 🚨");
});
module.exports = db;