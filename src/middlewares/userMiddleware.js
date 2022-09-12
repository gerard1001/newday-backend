import { decodeToken } from "../helpers/userHelper";
import model from "../database/models";
import checkToken from "../helpers/checkToken";

const userModel = model.User;

export const Auth = async (req, res, next) => {
  try {
    const token = checkToken(req);
    if (!token) {
      return res
        .status(401)
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
      return res.status(401).send({
        message: "This action can only be performed by the admin!!!",
      });
    }
    req.user = legalUser;

    next();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const updateAuth = async (req, res, next) => {
  try {
    const id = req.params;
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ message: "you are not logged in!!" });
    }

    const decode = decodeToken(token);

    const newUser = await userModel.findByPk(decode.userId, {});
    // console.log("```````````ID <||> TOKEN``````````", id.id == newUser.userId);

    if (id.id !== newUser.userId && newUser.roleId !== 1) {
      return res
        .status(401)
        .send({ message: "You can not update someone else's data." });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const deleteAuth = async (req, res, next) => {
  try {
    const id = req.params;
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ message: "you are not logged in!!" });
    }

    const decode = decodeToken(token);

    const newUser = await userModel.findByPk(decode.userId, {});

    if (id.id !== newUser.userId && newUser.roleId !== 1) {
      return res.status(401).send({
        message: "You can not delete someone else's account.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const authent = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ message: "you are not logged in!!" });
    }
    const decode = decodeToken(token);

    const exixtUser = await userModel.findByPk(decode.userId, {});

    if (!exixtUser) {
      return res.status(401).send({
        message: "This user does not exist.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
