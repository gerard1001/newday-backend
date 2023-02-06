"use strict";

// import { readdirSync } from "fs";
// import { basename as _basename, join } from "path";
// import Sequelize, { DataTypes } from "sequelize";
// import prop from "../../config/config";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);

const env = process.env.NODE_ENV || "development";
// const config = prop[env];
const config = require(`${__dirname}/../../config/config.js`)[env];
const db = {};

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, {
    dialect: "postgres",
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY! 👍");
  })
  .catch((err) => {
    console.log(config, "***");
    console.log(sequelize, "^^^");
    console.error("DATABASE  FAILED TO CONNECT! 🚨");
  });

module.exports = db;
