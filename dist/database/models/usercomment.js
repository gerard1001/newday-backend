"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function cov_1te8z8tt6b() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\usercomment.js";
  var hash = "f09b005a91d551a69ef8703b6c811e706a4e25c0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\models\\usercomment.js",
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
          line: 56,
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
          line: 24,
          column: 6
        },
        end: {
          line: 28,
          column: 9
        }
      },
      "5": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 54,
          column: 4
        }
      },
      "6": {
        start: {
          line: 55,
          column: 2
        },
        end: {
          line: 55,
          column: 21
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
            line: 56,
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
            line: 29,
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
    hash: "f09b005a91d551a69ef8703b6c811e706a4e25c0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1te8z8tt6b = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1te8z8tt6b();
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _ref = (cov_1te8z8tt6b().s[0]++, require("sequelize")),
  Model = _ref.Model;
cov_1te8z8tt6b().s[1]++;
module.exports = function (sequelize, DataTypes) {
  cov_1te8z8tt6b().f[0]++;
  var UserComment = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(UserComment, _Model);
    var _super = _createSuper(UserComment);
    function UserComment() {
      (0, _classCallCheck2["default"])(this, UserComment);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(UserComment, null, [{
      key: "associate",
      value: function associate(models) {
        cov_1te8z8tt6b().f[1]++;
        cov_1te8z8tt6b().s[2]++;
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Users"
        });
        cov_1te8z8tt6b().s[3]++;
        this.belongsTo(models.UserArticle, {
          foreignKey: {
            name: "userArticleId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "UserArticles"
        });
        cov_1te8z8tt6b().s[4]++;
        this.hasMany(models.Reply, {
          foreignKey: "commentId",
          as: "Replies",
          onDelete: "CASCADE"
        });
      }
    }]);
    return UserComment;
  }(Model);
  cov_1te8z8tt6b().s[5]++;
  UserComment.init({
    commentId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    userArticleId: {
      allowNull: false,
      type: DataTypes.UUID
    },
    comment: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize: sequelize,
    modelName: "UserComment"
  });
  cov_1te8z8tt6b().s[6]++;
  return UserComment;
};