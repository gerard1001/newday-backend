import { decodeToken } from "../helpers/userHelper";
import model from "../database/models";

const userRoutes = model.User;

const Auth = async (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.send({ message: "You are not logged in!!!" });
  }

  const decode = decodeToken(token);
  const newUser = await userRoutes.findByPk(decode.userId, {
    include: [
      {
        model: model.Role,
        as: "Roles",
        attributes: ["role"],
      },
    ],
  });
  req.user = newUser;

  next();
};

export default Auth;
