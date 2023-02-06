"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_6e4c77sqp() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\profile.js";
  var hash = "b969b7bbf3e7a9008fa959f077df27db4f972882";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\profile.js",
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
          line: 77,
          column: 2
        }
      },
      "2": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 18,
          column: 11
        }
      },
      "3": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 75,
          column: 4
        }
      },
      "4": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
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
            line: 77,
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
            line: 19,
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
    hash: "b969b7bbf3e7a9008fa959f077df27db4f972882"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_6e4c77sqp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_6e4c77sqp();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_6e4c77sqp().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_6e4c77sqp().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_6e4c77sqp().f[0]++;
  var Profile = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Profile, _Model);
    var _super = _createSuper(Profile);
    function Profile() {
      (0, _classCallCheck2["default"])(this, Profile);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Profile, null, [{
      key: "associate",
      value: function associate(models) {
        cov_6e4c77sqp().f[1]++;
        cov_6e4c77sqp().s[2]++;
        this.hasOne(models.Address, {
          foreignKey: "profileId",
          as: "Address",
          onDelete: "CASCADE"
        }), this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "User"
        });
      }
    }]);
    return Profile;
  }(Model);
  cov_6e4c77sqp().s[3]++;
  Profile.init({
    profileId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("full-time", "part-time"),
      allowNull: true
    },
    maritalStatus: {
      type: DataTypes.ENUM("single", "married", "divorced", "widowed"),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize: sequelize,
    modelName: "Profile",
    tableName: "Profiles"
  });
  cov_6e4c77sqp().s[4]++;
  return Profile;
};