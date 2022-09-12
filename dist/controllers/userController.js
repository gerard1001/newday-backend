"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyUser = exports.userLogin = exports.updateUser = exports.resetPwd = exports.resetLink = exports.registerUser = exports.getUser = exports.getOneUser = exports.deleteUser = exports.deleteOneUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = _interopRequireDefault(require("../database/models"));

var _fileUpload = require("../helpers/fileUpload");

var _userHelper = require("../helpers/userHelper");

var _nodemailer = require("../helpers/nodemailer");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var userModel = _models["default"].User;
var profileModel = _models["default"].Profile;
var addressModel = _models["default"].Address;

var registerUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, email, password;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.next = 4;
            return userModel.findOne({
              where: {
                email: email
              }
            }).then( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(usedEmail) {
                var createdUser, token, gender, createdProfile;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (!usedEmail) {
                          _context.next = 4;
                          break;
                        }

                        return _context.abrupt("return", res.status(409).send({
                          error: "email taken!"
                        }));

                      case 4:
                        _context.next = 6;
                        return userModel.create({
                          firstName: req.body.firstName,
                          lastName: req.body.lastName,
                          email: req.body.email,
                          password: (0, _userHelper.hashPassword)(password),
                          roleId: req.body.roleId,
                          where: {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: req.body.password,
                            roleId: req.body.roleId
                          }
                        })["catch"](function (err) {
                          return res.status(400).send({
                            message: "error1",
                            err: err
                          });
                        });

                      case 6:
                        createdUser = _context.sent;
                        token = (0, _userHelper.generateToken)({
                          id: createdUser.userId
                        }, "1d");
                        gender = req.body.gender;

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
                        return profileModel.create({
                          userId: createdUser.userId,
                          picture: req.body.picture,
                          birthDate: req.body.birthDate,
                          gender: req.body.gender,
                          phoneNumber: req.body.phoneNumber
                        })["catch"](function (error) {
                          return res.status(400).send({
                            message: "error2",
                            error: error
                          });
                        });

                      case 18:
                        createdProfile = _context.sent;
                        _context.next = 21;
                        return addressModel.create({
                          profileId: createdProfile.profileId,
                          country: req.body.country,
                          province: req.body.province,
                          district: req.body.district,
                          sector: req.body.sector,
                          street: req.body.street
                        }).then(function (data) {
                          var message = "\n        <h2>Account creation successful.</h2>\n        <p>Copy the following token::: <em>".concat(token, "</em></p>\n        ");
                          (0, _nodemailer.sendEmail)(message, createdUser.email);
                          return res.status(201).send({
                            message: "Success"
                          });
                        })["catch"](function (error) {
                          return res.status(400).send({
                            message: "Error while creating user profile!!!",
                            error: error
                          });
                        });

                      case 21:
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
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).send({
              message: "".concat(_context2.t0)
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function registerUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerUser = registerUser;

var verifyUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var token, userInfo, userId, user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            token = req.params.token;
            userInfo = (0, _userHelper.decodeToken)(token);
            userId = userInfo.id;
            _context3.next = 6;
            return userModel.findOne({
              where: {
                userId: userId
              }
            });

          case 6:
            user = _context3.sent;
            _context3.next = 9;
            return user.update({
              userVerified: true
            }, {
              where: {
                id: userId
              }
            });

          case 9:
            return _context3.abrupt("return", res.status(200).send({
              message: "Email verification successful"
            }));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).send({
              message: "".concat(_context3.t0)
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function verifyUser(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();

exports.verifyUser = verifyUser;

var getUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return userModel.findAll({
              order: [["roleId", "ASC"]]
            }).then(function (data) {
              return res.status(200).send({
                message: "Fetched all Users",
                body: {
                  data: data
                }
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "ERROR",
                err: err
              });
            });

          case 3:
            _context4.next = 8;
            break;

          case 5:
            _context4.prev = 5;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500).send({
              message: "".concat(_context4.t0)
            }));

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 5]]);
  }));

  return function getUser(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var getOneUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return userModel.findOne({
              where: {
                email: id
              },
              include: [{
                model: _models["default"].Profile,
                as: "Profiles",
                include: [{
                  model: _models["default"].Address,
                  as: "Addresses"
                }]
              }, {
                model: _models["default"].Category,
                as: "Categories"
              }, {
                model: _models["default"].ProductComment,
                as: "ProductComments",
                attributes: ["comment"],
                include: [{
                  model: _models["default"].Product,
                  as: "Products",
                  attributes: ["productName"]
                }]
              }, {
                model: _models["default"].UserArticle,
                as: "UserArticles",
                attributes: ["article", "uaId"],
                include: [{
                  model: _models["default"].UserComment,
                  as: "UserComments",
                  attributes: ["comment"]
                }]
              }]
            }).then(function (data) {
              return res.status(200).send(data);
            })["catch"](function (error) {
              return res.send({
                message: "failed to get ".concat(error)
              });
            });

          case 4:
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.status(500).send({
              message: "".concat(_context5.t0)
            }));

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function getOneUser(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getOneUser = getOneUser;

var updateUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _context6.next = 4;
            return userModel.update(req.body, {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              where: {
                userId: id
              }
            }).then(function (data) {
              return res.status(200).send({
                message: "User updated successfully!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "An error occured while updating User! The role or category assigned might be unavailable."
              });
            });

          case 4:
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", res.status(500).send({
              message: "".concat(_context6.t0)
            }));

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));

  return function updateUser(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return userModel.destroy({
              where: {},
              truncate: false
            }).then(function (data) {
              return res.status(200).send({
                message: "Deleted"
              });
            })["catch"](function (err) {
              return res.status(400).send({
                message: "Failed ".concat(err)
              });
            });

          case 3:
            _context7.next = 8;
            break;

          case 5:
            _context7.prev = 5;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", res.status(500).send({
              message: "".concat(_context7.t0)
            }));

          case 8:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 5]]);
  }));

  return function deleteUser(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var deleteOneUser = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = req.params.id;
            _context8.next = 4;
            return userModel.destroy({
              where: {
                userId: id
              }
            }).then(function (data) {
              if (data == 1) {
                return res.status(200).send({
                  message: "success"
                });
              }

              return res.status(400).send({
                message: "Failed to delete this user!"
              });
            })["catch"](function (err) {
              return res.status(400).send({
                err: err
              });
            });

          case 4:
            _context8.next = 9;
            break;

          case 6:
            _context8.prev = 6;
            _context8.t0 = _context8["catch"](0);
            return _context8.abrupt("return", res.status(500).send({
              message: "".concat(_context8.t0)
            }));

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 6]]);
  }));

  return function deleteOneUser(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteOneUser = deleteOneUser;

var userLogin = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var user, userExist, verified, validation, token;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return req.body;

          case 3:
            user = _context9.sent;
            _context9.next = 6;
            return userModel.findOne({
              where: {
                email: user.email
              }
            });

          case 6:
            userExist = _context9.sent;
            verified = userExist.userVerified;
            _context9.next = 10;
            return (0, _userHelper.comparePassword)(req.body.password, userExist.password);

          case 10:
            validation = _context9.sent;

            if (!validation) {
              _context9.next = 18;
              break;
            }

            if (verified) {
              _context9.next = 14;
              break;
            }

            return _context9.abrupt("return", res.status(401).send({
              message: "Please reach to your email and click the verify email button to proceed!!!"
            }));

          case 14:
            _context9.next = 16;
            return (0, _userHelper.generateToken)({
              email: userExist.email,
              userId: userExist.userId,
              firstName: userExist.firstName,
              lastName: userExist.lastName
            }, "1d");

          case 16:
            token = _context9.sent;
            return _context9.abrupt("return", res.status(201).header("authenticate", token).send({
              message: "Logged in successfully",
              token: token,
              roleId: userExist.roleId,
              userId: userExist.userId,
              firstName: userExist.firstName,
              lastName: userExist.lastName
            }));

          case 18:
            return _context9.abrupt("return", res.status(400).send({
              message: "Incorrect password"
            }));

          case 21:
            _context9.prev = 21;
            _context9.t0 = _context9["catch"](0);
            return _context9.abrupt("return", res.status(404).send({
              message: "Invalid credentials."
            }));

          case 24:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 21]]);
  }));

  return function userLogin(_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();

exports.userLogin = userLogin;

var resetLink = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    var userExist, token, message;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return userModel.findOne({
              where: {
                email: req.body.email
              }
            });

          case 3:
            userExist = _context10.sent;

            if (userExist) {
              _context10.next = 6;
              break;
            }

            return _context10.abrupt("return", res.status(404).send({
              message: "This user does not exist!!!"
            }));

          case 6:
            token = _jsonwebtoken["default"].sign({
              id: userExist.userId
            }, process.env.SECRETE, {
              expiresIn: "1d"
            });
            message = "\n          <h2>First step to reseting your password.</h2>\n        <p>Copy the following token::: <em>".concat(process.env.FRONTEND_URL, "/resetPassword?token=").concat(token, "</em></p>\n        ");
            (0, _nodemailer.sendEmail)(message, userExist.email);
            return _context10.abrupt("return", res.status(200).send({
              message: "Reset password message sent!"
            }));

          case 12:
            _context10.prev = 12;
            _context10.t0 = _context10["catch"](0);
            return _context10.abrupt("return", res.status(500).send({
              message: "".concat(_context10.t0)
            }));

          case 15:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 12]]);
  }));

  return function resetLink(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();

exports.resetLink = resetLink;

var resetPwd = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res) {
    var password, confirm_pass, token, userId;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            password = req.body.password;
            confirm_pass = req.body.confirm_pass;

            if (!(confirm_pass != password)) {
              _context11.next = 5;
              break;
            }

            return _context11.abrupt("return", res.status(400).send({
              message: "The passords you provided do not match!!!"
            }));

          case 5:
            token = req.params.token;
            userId = _jsonwebtoken["default"].verify(token, process.env.SECRETE).id;
            _context11.next = 9;
            return userModel.update({
              password: (0, _userHelper.hashPassword)(password)
            }, {
              where: {
                userId: userId
              }
            }).then(function (data) {
              if (data == 1) {
                return res.status(201).send({
                  message: "Password changed successfully!!!",
                  data: data
                });
              }

              return res.status(400).send({
                message: "Password reset failed!!!",
                data: data
              });
            })["catch"](function (err) {
              return res.status(500).send(err);
            });

          case 9:
            _context11.next = 14;
            break;

          case 11:
            _context11.prev = 11;
            _context11.t0 = _context11["catch"](0);
            return _context11.abrupt("return", res.status(500).send({
              message: "".concat(_context11.t0)
            }));

          case 14:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11, null, [[0, 11]]);
  }));

  return function resetPwd(_x20, _x21) {
    return _ref11.apply(this, arguments);
  };
}();

exports.resetPwd = resetPwd;