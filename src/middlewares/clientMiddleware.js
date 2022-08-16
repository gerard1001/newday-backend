import checkToken from "../helpers/checkToken";

const ClientAuth = async (req, res, next) => {
  const token = checkToken(req);

  if (!token) {
    return res.send({ message: "you are not logged in!!" });
  }

  next();
};
export default ClientAuth;
