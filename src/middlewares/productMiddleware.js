import { decodeToken } from "../helpers/userHelper";
import checkToken from "../helpers/checkToken";
import model from "../database/models";

const userModel = model.User;

export const Auth = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ error: "You are not logged in!!!" });
    }

    const decode = decodeToken(token);
    const newUser = await userModel.findByPk(decode.userId, {
      include: [
        {
          model: model.Role,
          as: "Roles",
          attributes: ["role"],
        },
      ],
    });

    if (
      newUser.roleId !== 1 &&
      newUser.roleId !== 2 &&
      newUser.roleId !== 3 &&
      newUser.roleId !== 4
    ) {
      return res.status(401).send({
        error: "This action can only be performed by the admin or manager !!",
      });
    }

    req.user = newUser;

    next();
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};

export const CompanyAuth = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ error: "You are not logged in!!!" });
    }

    const decode = decodeToken(token);
    const newUser = await userModel.findByPk(decode.userId, {
      include: [
        {
          model: model.Role,
          as: "Roles",
          attributes: ["role"],
        },
      ],
    });

    if (newUser.roleId !== 1 && newUser.roleId !== 2) {
      return res.status(401).send({
        error:
          "This action can only be performed by the super-admin or a registered owner !!",
      });
    }

    req.user = newUser;

    next();
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};

export const ComodityAuth = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ error: "You are not logged in!!!" });
    }

    const decode = decodeToken(token);
    const newUser = await userModel.findByPk(decode.userId, {
      include: [
        {
          model: model.Role,
          as: "Roles",
          attributes: ["role"],
        },
      ],
    });

    if (newUser.roleId !== 1 && newUser.roleId !== 2 && newUser.roleId !== 3) {
      return res.status(401).send({
        error:
          "This action can only be performed by the super-admin, a registered owner or an admin!!",
      });
    }

    req.user = newUser;

    next();
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};
