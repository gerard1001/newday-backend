import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const commentModel = model.UserComment;

export const postComment = async (req, res) => {
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
      return res.send({
        message: "success",
        data,
      });
    })
    .catch((err) => {
      res.send({ err });
    });
};
