"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_25h7zo9n0w() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\comodity_category.js";
  var hash = "b2a8fe1b6ed60d7c0af56e08ae9792042a3b6999";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\comodity_category.js",
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
          line: 27,
          column: 2
        }
      },
      "2": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 25,
          column: 4
        }
      },
      "3": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 27
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
            line: 27,
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
            line: 5,
            column: 31
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
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b2a8fe1b6ed60d7c0af56e08ae9792042a3b6999"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25h7zo9n0w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_25h7zo9n0w();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_25h7zo9n0w().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_25h7zo9n0w().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_25h7zo9n0w().f[0]++;
  var Comodity_Category = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Comodity_Category, _Model);
    var _super = _createSuper(Comodity_Category);
    function Comodity_Category() {
      (0, _classCallCheck2["default"])(this, Comodity_Category);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Comodity_Category, null, [{
      key: "associate",
      value: function associate(models) {
        cov_25h7zo9n0w().f[1]++;
      }
    }]);
    return Comodity_Category;
  }(Model);
  cov_25h7zo9n0w().s[2]++;
  Comodity_Category.init({
    comodityCategoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    categoryId: {
      type: DataTypes.UUID
    },
    comodityId: {
      type: DataTypes.UUID
    }
  }, {
    sequelize: sequelize,
    modelName: "Comodity_Category"
  });
  cov_25h7zo9n0w().s[3]++;
  return Comodity_Category;
};