"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_19e8887hhc() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\company.js";
  var hash = "f4621232d376dc65f1ad6ba8af0e87cad2a6e4ab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\company.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 18
        },
        end: {
          line: 2,
          column: 38
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 57,
          column: 2
        }
      },
      "2": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 9,
          column: 9
        }
      },
      "3": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "4": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 24,
          column: 9
        }
      },
      "5": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 55,
          column: 4
        }
      },
      "6": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 56,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 57,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 5,
            column: 5
          }
        },
        loc: {
          start: {
            line: 5,
            column: 29
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f4621232d376dc65f1ad6ba8af0e87cad2a6e4ab"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19e8887hhc = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_19e8887hhc();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_19e8887hhc().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_19e8887hhc().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_19e8887hhc().f[0]++;
  var Company = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Company, _Model);
    var _super = _createSuper(Company);
    function Company() {
      (0, _classCallCheck2["default"])(this, Company);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Company, null, [{
      key: "associate",
      value: function associate(models) {
        cov_19e8887hhc().f[1]++;
        cov_19e8887hhc().s[2]++;
        this.belongsToMany(models.Comodity, {
          foreignKey: "companyId",
          through: "Comodity_Company"
        });
        cov_19e8887hhc().s[3]++;
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "owner"
        });
        cov_19e8887hhc().s[4]++;
        this.hasMany(models.Product, {
          foreignKey: "companyId",
          as: "Products",
          onDelete: "CASCADE"
        });
      }
    }]);
    return Company;
  }(Model);
  cov_19e8887hhc().s[5]++;
  Company.init({
    companyId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    companyName: {
      type: DataTypes.STRING
    },
    companyLogo: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    companyProducts: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    }
  }, {
    sequelize: sequelize,
    modelName: "Company"
  });
  cov_19e8887hhc().s[6]++;
  return Company;
};