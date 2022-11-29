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
  var Comodity_Company = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Comodity_Company, _Model);

    var _super = _createSuper(Comodity_Company);

    function Comodity_Company() {
      (0, _classCallCheck2["default"])(this, Comodity_Company);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Comodity_Company, null, [{
      key: "associate",
      value: function associate(models) {}
    }]);
    return Comodity_Company;
  }(Model);

  Comodity_Company.init({
    comodityCompanyId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    companyId: {
      type: DataTypes.UUID
    },
    comodityId: {
      type: DataTypes.UUID
    }
  }, {
    sequelize: sequelize,
    modelName: "Comodity_Company"
  });
  return Comodity_Company;
};