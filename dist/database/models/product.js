"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_wcf15mu54() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\product.js";
  var hash = "8741f255fd1f15b01b0bee1f2d5dc646128dec26";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\product.js",
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
          line: 85,
          column: 2
        }
      },
      "2": {
        start: {
          line: 6,
          column: 6
        },
        end: {
          line: 10,
          column: 9
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 16,
          column: 9
        }
      },
      "4": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "5": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "6": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 83,
          column: 4
        }
      },
      "7": {
        start: {
          line: 84,
          column: 2
        },
        end: {
          line: 84,
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
            line: 85,
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
            line: 31,
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8741f255fd1f15b01b0bee1f2d5dc646128dec26"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_wcf15mu54 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_wcf15mu54();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_wcf15mu54().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_wcf15mu54().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_wcf15mu54().f[0]++;
  var Product = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Product, _Model);
    var _super = _createSuper(Product);
    function Product() {
      (0, _classCallCheck2["default"])(this, Product);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Product, null, [{
      key: "associate",
      value: function associate(models) {
        cov_wcf15mu54().f[1]++;
        cov_wcf15mu54().s[2]++;
        this.hasMany(models.ProductComment, {
          foreignKey: "productId",
          as: "ProductComments",
          onDelete: "CASCADE"
        });
        cov_wcf15mu54().s[3]++;
        this.hasMany(models.ProductImage, {
          foreignKey: "productId",
          as: "ProductImages",
          onDelete: "CASCADE"
        });
        cov_wcf15mu54().s[4]++;
        this.belongsToMany(models.Class, {
          foreignKey: "productId",
          through: "Class_Product"
        });
        cov_wcf15mu54().s[5]++;
        this.belongsTo(models.Company, {
          foreignKey: {
            name: "companyId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Company"
        });
      }
    }]);
    return Product;
  }(Model);
  cov_wcf15mu54().s[6]++;
  Product.init({
    productId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    companyId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(8, 2)
    },
    full_price: {
      type: DataTypes.DECIMAL(8, 2)
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    imagesId: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    description: {
      type: DataTypes.TEXT
    },
    size: {
      type: DataTypes.STRING
    },
    brand: {
      type: DataTypes.STRING
    },
    ISBN: {
      type: DataTypes.BIGINT
    },
    releaseDate: {
      type: DataTypes.DATE
    }
    // countInStock: {
    //   type: DataTypes.INTEGER,
    // },
  }, {
    sequelize: sequelize,
    modelName: "Product"
  });
  cov_wcf15mu54().s[7]++;
  return Product;
};