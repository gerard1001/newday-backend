import { decodeToken } from "../helpers/userHelper";
import model from "../database/models";
import checkToken from "../helpers/checkToken";

const userModel = model.User;

export const Auth = async (req, res, next) => {
  const token = checkToken(req);
  if (!token) {
    return res
      .status(404)
      .send({ message: "Unauthorized to perform this action." });
  }

  const decode = decodeToken(token);

  const legalUser = await userModel.findByPk(decode.userId, {
    include: [
      {
        model: model.Role,
        as: "Roles",
        attributes: ["role", "roleId"],
      },
    ],
  });

  if (legalUser.roleId != 1) {
    return res.status(403).send({
      message: "This action can only be performed by the admin!!!",
    });
  }
  req.user = legalUser;

  next();
};

export const updateAuth = async (req, res, next) => {
  const id = req.params;
  const token = checkToken(req);

  if (!token) {
    return res.send({ message: "you are not logged in!!" });
  }

  const decode = decodeToken(token);

  const newUser = await userModel.findByPk(decode.userId, {});
  // console.log("```````````ID <||> TOKEN``````````", id.id == newUser.userId);

  if (id.id !== newUser.userId && newUser.roleId !== 1) {
    return res.send({ message: "You can not update someone else's data." });
  }

  next();
};

export const deleteAuth = async (req, res, next) => {
  const id = req.params;
  const token = checkToken(req);

  if (!token) {
    return res.send({ message: "you are not logged in!!" });
  }

  const decode = decodeToken(token);

  const newUser = await userModel.findByPk(decode.userId, {});

  if (id.id !== newUser.userId && newUser.roleId !== 1) {
    return res.send({ message: "You can not delete someone else's account." });
  }

  next();
};
