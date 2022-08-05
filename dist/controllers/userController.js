"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userLogin = exports.updateUser = exports.registerUser = exports.getUser = exports.getOneUser = exports.deleteUser = exports.deleteOneUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var _userHelper = require("../helpers/userHelper");

var userRoutes = _models["default"].User;
var profileRoutes = _models["default"].Profile;

var registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, firstName, lastName, email, password;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password;
            console.log("`````````````BODY```````````", req.body);
            _context2.next = 4;
            return userRoutes.findOne({
              where: {
                email: email
              }
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(usedEmail) {
                var created, gender;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!usedEmail) {
                          _context.next = 4;
                          break;
                        }

                        return _context.abrupt("return", res.send({
                          error: "email taken!"
                        }));

                      case 4:
                        _context.next = 6;
                        return userRoutes.create({
                          firstName: req.body.firstName,
                          lastName: req.body.lastName,
                          email: req.body.email,
                          password: (0, _userHelper.hashPassword)(password),
                          categoryId: req.body.categoryId,
                          roleId: req.body.roleId,
                          where: {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: req.body.password,
                            categoryId: req.body.categoryId,
                            roleId: req.body.roleId
                          }
                        }) // .then((data) => {
                        //   return res.send({ message: "Good", data });
                        // })
                        ["catch"](function (err) {
                          return res.send({
                            message: "error1",
                            err: err
                          });
                        });

                      case 6:
                        created = _context.sent;
                        gender = req.body.gender;
                        console.log("``````````````````gdutsdcuvysbyvbuyb'''''''''''''''''''", gender == "female");

                        if (!req.file) {
                          _context.next = 15;
                          break;
                        }

                        _context.next = 12;
                        return (0, _fileUpload.imageUpload)(req);

                      case 12:
                        req.body.picture = _context.sent;
                        _context.next = 16;
                        break;

                      case 15:
                        if (gender == "female") {
                          req.body.picture = "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
                        } else {
                          req.body.picture = "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";
                        }

                      case 16:
                        _context.next = 18;
                        return profileRoutes.create({
                          userId: created.userId,
                          picture: req.body.picture,
                          birthDate: req.body.birthDate,
                          gender: req.body.gender,
                          phoneNumber: req.body.phoneNumber
                        }).then(function (data) {
                          res.send({
                            message: "Success",
                            data: data
                          });
                        })["catch"](function (error) {
                          res.send({
                            message: "error2",
                            error: error
                          });
                        });

                      case 18:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerUser = registerUser;

var getUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return userRoutes.findAll({}).then(function (data) {
              return res.status(200).send({
                message: "Fetched all Users",
                body: {
                  data: data
                }
              });
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUser(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getOneUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return userRoutes.findOne({
              where: {
                email: id
              },
              include: [{
                model: _models["default"].Profile,
                as: "Profiles"
              }]
            }).then(function (data) {
              res.send(data);
            })["catch"](function (error) {
              res.send({
                message: "failed to get ".concat(error)
              });
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getOneUser(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getOneUser = getOneUser;

var updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return userRoutes.update(req.body, {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              where: {
                userId: id
              }
            }).then(function (data) {
              res.status(200).send({
                message: "User updated successfully!",
                data: data
              });
            })["catch"](function (err) {
              res.status(500).send({
                message: "An error occured while updating User! The role or category assigned might be unavailable."
              });
              console.log(err);
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateUser(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return userRoutes.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              res.send({
                message: "Deleted"
              });
            })["catch"](function (err) {
              res.status(500).send({
                message: "Failed ".concat(err)
              });
            });

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteUser(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var deleteOneUser = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return userRoutes.destroy({
              where: {
                userId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.send({
                  message: "success"
                });
              }

              return res.send({
                message: "Failed to delete this user!"
              });
            })["catch"](function (err) {
              return res.status(500).send({
                err: err
              });
            });

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteOneUser(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteOneUser = deleteOneUser;

var userLogin = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var user, userExist, validation, token;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return req.body;

          case 3:
            user = _context8.sent;
            _context8.next = 6;
            return userRoutes.findOne({
              where: {
                email: user.email
              }
            });

          case 6:
            userExist = _context8.sent;
            _context8.next = 9;
            return (0, _userHelper.comparePassword)(req.body.password, userExist.password);

          case 9:
            validation = _context8.sent;

            if (!validation) {
              _context8.next = 15;
              break;
            }

            _context8.next = 13;
            return (0, _userHelper.generateToken)({
              email: userExist.email,
              userId: userExist.userId,
              firstName: userExist.firstName,
              lastName: userExist.lastName
            }, "1d");

          case 13:
            token = _context8.sent;
            return _context8.abrupt("return", res.status(201).header("authenticate", token).send({
              message: "Logged in successfully",
              token: token,
              roleId: userExist.roleId,
              userId: userExist.userId,
              firstName: userExist.firstName,
              lastName: userExist.lastName
            }));

          case 15:
            return _context8.abrupt("return", res.status(400).send({
              message: "Incorrect password"
            }));

          case 18:
            _context8.prev = 18;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", res.status(404).send({
              message: "Invalid credentials."
            }));

          case 21:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 18]]);
  }));

  return function userLogin(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();

exports.userLogin = userLogin;