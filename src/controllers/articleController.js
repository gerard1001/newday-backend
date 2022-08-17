import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const articleModel = model.UserArticle;

export const createArticle = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    console.log(decode);

    await articleModel
      .create({
        userId: decode.userId,
        article: req.body.article,
      })
      .then((data) => {
        return res.status(201).send({
          message: "success!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
