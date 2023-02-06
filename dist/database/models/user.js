"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_bqo7dxbzo() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\user.js";
  var hash = "4d25e4948d91ebe8e0389c5a7f8b2d8e876f3257";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\user.js",
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
          line: 145,
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
          line: 26,
          column: 6
        },
        end: {
          line: 30,
          column: 9
        }
      },
      "6": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 36,
          column: 9
        }
      },
      "7": {
        start: {
          line: 38,
          column: 6
        },
        end: {
          line: 42,
          column: 9
        }
      },
      "8": {
        start: {
          line: 44,
          column: 6
        },
        end: {
          line: 48,
          column: 9
        }
      },
      "9": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 54,
          column: 9
        }
      },
      "10": {
        start: {
          line: 56,
          column: 6
        },
        end: {
          line: 63,
          column: 9
        }
      },
      "11": {
        start: {
          line: 65,
          column: 6
        },
        end: {
          line: 68,
          column: 9
        }
      },
      "12": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 74,
          column: 9
        }
      },
      "13": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 143,
          column: 4
        }
      },
      "14": {
        start: {
          line: 144,
          column: 2
        },
        end: {
          line: 144,
          column: 14
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
            line: 145,
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
            line: 75,
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
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4d25e4948d91ebe8e0389c5a7f8b2d8e876f3257"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_bqo7dxbzo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_bqo7dxbzo();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_bqo7dxbzo().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_bqo7dxbzo().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_bqo7dxbzo().f[0]++;
  var User = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(User, _Model);
    var _super = _createSuper(User);
    function User() {
      (0, _classCallCheck2["default"])(this, User);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(User, null, [{
      key: "associate",
      value: function associate(models) {
        cov_bqo7dxbzo().f[1]++;
        cov_bqo7dxbzo().s[2]++;
        this.belongsToMany(models.Category, {
          foreignKey: "userId",
          through: "User_Category"
        });
        cov_bqo7dxbzo().s[3]++;
        this.belongsTo(models.Role, {
          foreignKey: {
            name: "roleId",
            allowNull: true
          },
          onDelete: "SET DEFAULT",
          as: "Roles"
        });
        cov_bqo7dxbzo().s[4]++;
        this.hasOne(models.Profile, {
          foreignKey: "userId",
          as: "Profile",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[5]++;
        this.hasMany(models.ProductComment, {
          foreignKey: "userId",
          as: "ProductComments",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[6]++;
        this.hasMany(models.UserArticle, {
          foreignKey: "userId",
          as: "UserArticles",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[7]++;
        this.hasMany(models.UserComment, {
          foreignKey: "userId",
          as: "UserComments",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[8]++;
        this.hasMany(models.Tweet, {
          foreignKey: "userId",
          as: "Tweets",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[9]++;
        this.hasOne(models.Review, {
          foreignKey: "userId",
          as: "Reviews",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[10]++;
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Manager"
        });
        cov_bqo7dxbzo().s[11]++;
        this.hasMany(models.User, {
          foreignKey: "userId",
          onDelete: "CASCADE"
        });
        cov_bqo7dxbzo().s[12]++;
        this.hasMany(models.Company, {
          foreignKey: "userId",
          as: "Companies",
          onDelete: "CASCADE"
        });
      }
    }]);
    return User;
  }(Model);
  cov_bqo7dxbzo().s[13]++;
  User.init({
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    roleId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 4 // default role is client
    },

    managerId: {
      type: DataTypes.UUID,
      "default": null,
      references: {
        model: "Users",
        key: "userId",
        as: "Manager"
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    },
    userVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isSubscribed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
    modelName: "User",
    tableName: "Users"
  });
  cov_bqo7dxbzo().s[14]++;
  return User;
};