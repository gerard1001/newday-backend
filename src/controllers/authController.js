import jwt  from "jsonwebtoken";
import bcrypt  from "bcrypt";
import models from '../database/models';
import AppError  from '../utils/appError';
import { promisify } from 'util';

const signToken = (id) =>
  jwt.sign({ id }, 'manzivalentin123', { //secret key
    expiresIn: '1d', // time to expire
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

//   //remove the password from the output
//   user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

//FOR LOGIN

exports.login = async (req, res, next) => {
    const { email, Password } = req.body;
  
    //1)Check if email & password exist.
    if (!email || !Password) {
        next(res.send({
            message: "Incorrect email or password"
        }))
    }
  
    //2)Check if user exist and password is correct
  
    const user = await models.User.findOne({ where: { email } });
  
    const correctPassword = async function (candidatePassword, userPassword) {
      return await bcrypt.compare(candidatePassword, userPassword);
    };
  
    if (!user || !(await correctPassword(Password, user.Password))) {
        next(res.send({
            message: "Incorrect email or password"
        }))
    }
  
    //3)if everything is ok, then send token to user
    createSendToken(user, 200, res);
  };

  //FOR PROTECTING ROUTES

  exports.protect = async (req, res, next) => {
    //1 Getting token and check its there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split('')[1];
    }
    // console.log(token)
    if (!token) {
      return next(
        new AppError('You are not logged in', 401)
      );
    }
    // 2. verificatoin token
    const decoded = await promisify(jwt.verify)(token, 'manzivalentin123');
  
    // 3.check if user still exists
  
    const freshUser = await models.User.findOne({
      where: {
        id: decoded.id,
      },
    });
  
    if (!freshUser) {
      return next(
        new AppError('The token longer exist.', 401)
      );
    }
  
    next();
  };