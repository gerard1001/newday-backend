"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_17kz9m4v6r() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\category.js";
  var hash = "b3032151ce603d1353819e7047fcdcad665210d5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\category.js",
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
          line: 40,
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
          line: 16,
          column: 6
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "5": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 38,
          column: 4
        }
      },
      "6": {
        start: {
          line: 39,
          column: 2
        },
        end: {
          line: 39,
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
            line: 40,
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
            line: 20,
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
    hash: "b3032151ce603d1353819e7047fcdcad665210d5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17kz9m4v6r = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_17kz9m4v6r();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_17kz9m4v6r().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_17kz9m4v6r().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_17kz9m4v6r().f[0]++;
  var Category = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Category, _Model);
    var _super = _createSuper(Category);
    function Category() {
      (0, _classCallCheck2["default"])(this, Category);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Category, null, [{
      key: "associate",
      value: function associate(models) {
        cov_17kz9m4v6r().f[1]++;
        cov_17kz9m4v6r().s[2]++;
        this.belongsToMany(models.User, {
          foreignKey: "categoryId",
          through: "User_Category"
        });
        cov_17kz9m4v6r().s[3]++;
        this.belongsToMany(models.Class, {
          foreignKey: "categoryId",
          through: "Category_Class"
        });
        cov_17kz9m4v6r().s[4]++;
        this.belongsToMany(models.Comodity, {
          foreignKey: "categoryId",
          through: "Comodity_Category"
        });
      }
    }]);
    return Category;
  }(Model);
  cov_17kz9m4v6r().s[5]++;
  Category.init({
    categoryId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    categoryName: {
      type: DataTypes.STRING
    }
  }, {
    sequelize: sequelize,
    modelName: "Category"
  });
  cov_17kz9m4v6r().s[6]++;
  return Category;
};