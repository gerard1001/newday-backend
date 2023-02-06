"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_2919h0tvdr() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\address.js";
  var hash = "7da1a14d2b310256af2e35a6fe8f48b9b80db7e8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\address.js",
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
          line: 45,
          column: 2
        }
      },
      "2": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "3": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 43,
          column: 4
        }
      },
      "4": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
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
            line: 45,
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
            line: 14,
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
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7da1a14d2b310256af2e35a6fe8f48b9b80db7e8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2919h0tvdr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2919h0tvdr();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_2919h0tvdr().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_2919h0tvdr().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_2919h0tvdr().f[0]++;
  var Address = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Address, _Model);
    var _super = _createSuper(Address);
    function Address() {
      (0, _classCallCheck2["default"])(this, Address);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Address, null, [{
      key: "associate",
      value: function associate(models) {
        cov_2919h0tvdr().f[1]++;
        cov_2919h0tvdr().s[2]++;
        this.belongsTo(models.Profile, {
          foreignKey: {
            name: "profileId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Profile"
        });
      }
    }]);
    return Address;
  }(Model);
  cov_2919h0tvdr().s[3]++;
  Address.init({
    addressId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    profileId: {
      allowNull: true,
      type: DataTypes.UUID
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    street: {
      type: DataTypes.STRING
    }
  }, {
    sequelize: sequelize,
    modelName: "Address",
    tableName: "Addresses"
  });
  cov_2919h0tvdr().s[4]++;
  return Address;
};