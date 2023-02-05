"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _require = require("sequelize"),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
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
        this.hasMany(models.ProductComment, {
          foreignKey: "productId",
          as: "ProductComments",
          onDelete: "CASCADE"
        });
        this.hasMany(models.ProductImage, {
          foreignKey: "productId",
          as: "ProductImages",
          onDelete: "CASCADE"
        });
        this.belongsToMany(models.Class, {
          foreignKey: "productId",
          through: "Class_Product"
        });
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
    } // countInStock: {
    //   type: DataTypes.INTEGER,
    // },

  }, {
    sequelize: sequelize,
    modelName: "Product"
  });
  return Product;
};