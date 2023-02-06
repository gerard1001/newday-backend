"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_17ku8eq3xd() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\productcomment.js";
  var hash = "18e266a0a5b988db8ef4f7ee884c9761ff37a61b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\productcomment.js",
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
          line: 50,
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
          line: 15,
          column: 6
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "4": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 48,
          column: 4
        }
      },
      "5": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 49,
          column: 24
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
            line: 50,
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
            line: 23,
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
    hash: "18e266a0a5b988db8ef4f7ee884c9761ff37a61b"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17ku8eq3xd = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_17ku8eq3xd();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_17ku8eq3xd().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_17ku8eq3xd().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_17ku8eq3xd().f[0]++;
  var ProductComment = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(ProductComment, _Model);
    var _super = _createSuper(ProductComment);
    function ProductComment() {
      (0, _classCallCheck2["default"])(this, ProductComment);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(ProductComment, null, [{
      key: "associate",
      value: function associate(models) {
        cov_17ku8eq3xd().f[1]++;
        cov_17ku8eq3xd().s[2]++;
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Users"
        });
        cov_17ku8eq3xd().s[3]++;
        this.belongsTo(models.Product, {
          foreignKey: {
            name: "productId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Products"
        });
      }
    }]);
    return ProductComment;
  }(Model);
  cov_17ku8eq3xd().s[4]++;
  ProductComment.init({
    pcId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    productId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    comment: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize: sequelize,
    modelName: "ProductComment"
  });
  cov_17ku8eq3xd().s[5]++;
  return ProductComment;
};