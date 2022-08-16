import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const articleModel = model.UserArticle;

export const createArticle = async (req, res) => {
  const token = checkToken(req);

  const decode = decodeToken(token);

  console.log(decode);

  await articleModel
    .create({
      userId: decode.userId,
      article: req.body.article,
    })
    .then((data) => {
      res.send({
        message: "success!!!",
        data,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};
