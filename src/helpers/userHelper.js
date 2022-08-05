const { hashSync, compareSync, genSaltSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const hashPassword = (pwd) => {
  const salt = genSaltSync(10);

  return hashSync(pwd, salt);
};

export const comparePassword = (plainPassword, hashedPassword) => {
  const compare = compareSync(plainPassword, hashedPassword);

  return compare;
};

export const generateToken = (payload, expiresIn) => {
  var token = jwt.sign(payload, "datasudobuy", { expiresIn });
  return token;
};

export const decodeToken = (token) => {
  const verify = jwt.verify(token, "datasudobuy");
  return verify;
};
