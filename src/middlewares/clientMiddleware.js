import checkToken from "../helpers/checkToken";

const ClientAuth = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).send({ message: "you are not logged in!!" });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
export default ClientAuth;
