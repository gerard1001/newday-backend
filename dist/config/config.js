"use strict";

function cov_1xlsgco36t() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\config\\config.js";
  var hash = "a03c53fc3cdb3f87e0462409b189605ac598e1b8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\config\\config.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 32
        }
      },
      "1": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      "2": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 26,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a03c53fc3cdb3f87e0462409b189605ac598e1b8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1xlsgco36t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1xlsgco36t();
// import dotenv from "dotenv";
var dotenv = (cov_1xlsgco36t().s[0]++, require("dotenv"));
cov_1xlsgco36t().s[1]++;
dotenv.config();
cov_1xlsgco36t().s[2]++;
module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DEV_URL,
    dialect: "postgres",
    port: process.env.PORT,
    logging: false
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_URL,
    dialect: "postgres",
    port: process.env.PORT
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.PROD_URL,
    dialect: "postgres",
    port: process.env.PORT
  }
};