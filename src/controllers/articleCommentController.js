import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const commentModel = model.UserComment;

export const postComment = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    console.log(decode);
    await commentModel
      .create({
        userId: decode.userId,
        uaId: req.body.uaId,
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
