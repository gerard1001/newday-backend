import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const commentModel = model.UserComment;
const replyModel = model.Reply;

export const postComment = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    await commentModel
      .create({
        userId: decode.userId,
        userArticleId: req.body.userArticleId,
        comment: req.body.comment,
      })
      .then((data) => {
        return res.status(200).send({
          message: "success",
          data,
        });
      })
      .catch((err) => {
        res.status(400).send({ err });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getComments = async (req, res) => {
  await commentModel
    .findAll({})
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
};

export const createReply = async (req, res) => {
  try {
    const token = checkToken(req);
    const decode = decodeToken(token);

    const id = decode.userId;

    await replyModel
      .create({
        userId: id,
        commentId: req.body.commentId,
        reply: req.body.reply,
      })
      .then((data) => {
        return res.status(201).send({
          message: "success",
          data,
        });
      })
      .catch((err) => {
        res.status(400).send({ message: `${err}` });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
