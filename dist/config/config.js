"use strict";

// import dotenv from "dotenv";
var dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DEV_URL,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_URL,
    dialect: "postgres",
    port: process.env.DB_PORT
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.PROD_URL,
    dialect: "postgres",
    port: process.env.DB_PORT
  }
};