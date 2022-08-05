'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _require = require('sequelize'),
    Model = _require.Model;

module.exports = function (sequelize, DataTypes) {
  var _Address$init;

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
        this.belongsTo(models.Profile, {
          foreignKey: {
            name: 'profileId',
            allowNull: true
          },
          onDelete: 'CASCADE',
          as: 'Profiles'
        });
      }
    }]);
    return Address;
  }(Model);

  Address.init((_Address$init = {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
      allowNull: false
    },
    profileId: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    country: {
      type: DataTypes.STRING
    }
  }, (0, _defineProperty2["default"])(_Address$init, "country", {
    type: DataTypes.STRING
  }), (0, _defineProperty2["default"])(_Address$init, "province", {
    type: DataTypes.STRING
  }), (0, _defineProperty2["default"])(_Address$init, "district", {
    type: DataTypes.STRING
  }), (0, _defineProperty2["default"])(_Address$init, "sector", {
    type: DataTypes.STRING
  }), (0, _defineProperty2["default"])(_Address$init, "street", {
    type: DataTypes.STRING
  }), _Address$init), {
    sequelize: sequelize,
    modelName: 'Address',
    tableName: 'Addresses'
  });
  return Address;
};