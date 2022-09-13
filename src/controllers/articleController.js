import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";
import { fileUpload } from "../helpers/fileUpload";

const articleModel = model.UserArticle;

export const createArticle = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    if (req.file) {
      req.body.image = await fileUpload(req);
    } else {
      req.body.image =
        "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";
    }

    await articleModel
      .create({
        userId: decode.userId,
        image: req.body.image,
        title: req.body.title,
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

export const getArticles = async (req, res) => {
  try {
    await articleModel
      .findAll({
        include: [{ model: model.User, as: "Users", attributes: ["email"] }],
      })
      .then((data) => {
        return res.send({
          message: "success",
          data,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: `${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
