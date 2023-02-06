"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_1p2mdao99() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\comodity.js";
  var hash = "b64840d58abc206e0530fb1da2e72a1cf38fce25";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\comodity.js",
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
          line: 38,
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
          line: 14,
          column: 9
        }
      },
      "4": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 36,
          column: 4
        }
      },
      "5": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 18
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
            line: 38,
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
            line: 15,
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
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b64840d58abc206e0530fb1da2e72a1cf38fce25"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1p2mdao99 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1p2mdao99();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_1p2mdao99().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_1p2mdao99().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_1p2mdao99().f[0]++;
  var Comodity = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Comodity, _Model);
    var _super = _createSuper(Comodity);
    function Comodity() {
      (0, _classCallCheck2["default"])(this, Comodity);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Comodity, null, [{
      key: "associate",
      value: function associate(models) {
        cov_1p2mdao99().f[1]++;
        cov_1p2mdao99().s[2]++;
        this.belongsToMany(models.Category, {
          foreignKey: "comodityId",
          through: "Comodity_Category"
        });
        cov_1p2mdao99().s[3]++;
        this.belongsToMany(models.Company, {
          foreignKey: "comodityId",
          through: "Comodity_Company"
        });
      }
    }]);
    return Comodity;
  }(Model);
  cov_1p2mdao99().s[4]++;
  Comodity.init({
    comodityId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    comodityName: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize: sequelize,
    modelName: "Comodity"
  });
  cov_1p2mdao99().s[5]++;
  return Comodity;
};