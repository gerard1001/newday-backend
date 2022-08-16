import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";

const commentModel = model.ProductComment;
const productModel = model.Product;

export const createComment = async (req, res) => {
  const token = checkToken(req);
  const existingproduct = await productModel.findOne({
    where: {
      productId: req.body.productId,
    },
  });

  const decode = decodeToken(token);
  const id = decode.userId;
  console.log(id);

  if (!existingproduct) {
    return res.send({
      message: "You can not comment on a non existing product.",
    });
  }

  await commentModel
    .create({
      productId: req.body.productId,
      userId: id,
      comment: req.body.comment,
    })
    .then((data) => {
      res.send({
        message: "Comment posted successfully",
        data,
      });
    })
    .catch((err) => {
      res.send({
        message: `ERROR ${err}`
      });
    });
};
