import { decodeToken } from "../helpers/userHelper";
import model from "../database/models";

const userModel = model.User;

const Auth = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

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
      message: "THis action can only be performed by the admin!!!",
    });
  }
  req.user = legalUser;
  console.log(
    "`````````````````LEGALUSER````````````````````",
    legalUser.roleId
  );

  next();
};

export default Auth;
