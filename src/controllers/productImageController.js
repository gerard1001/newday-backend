import model from "../database/models";
import { fileUpload } from "../helpers/fileUpload";

const productModel = model.Product;
const imageModel = model.ProductImage;

const createProductImage = async (req, res) => {
  try {
    const { productId } = req.body;
    if (req.file) {
      req.body.imageUrl = await fileUpload(req);
    }

    const existingPdt = await productModel.findOne({
      where: {
        productId,
      },
    });

    await imageModel
      .create({
        productId,
        imageUrl: req.body.imageUrl,
        where: {
          productId,
          imageUrl: req.body.imageUrl,
        },
      })
      .then((data) => {
        return res.send({
          message: "Success",
          body: data,
        });
      })
      .catch((error) => {
        return res.send({ error: `${error} 777` });
      });
  } catch (error) {
    return res.send({ error: `${error}` });
  }
};
const getProductImage = async (req, res) => {
  await imageModel
    .findAll({})
    .then((data) => {
      return res.send({
        message: "Success",
        body: data,
      });
    })
    .catch((error) => {
      return res.send({ error: `${error} 777` });
    });
};

const deleteProductImages = async (req, res) => {
  try {
    await imageModel
      .destroy({
        where: {},
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} product image successfully!`,
          });
        } else if (data === 0) {
          return res.status(403).send({
            message: `You don't have any more product images to delete!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} product images successfully!`,
            data,
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: "You got an error@!",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteOneProductImages = async (req, res) => {
  try {
    const { id } = req.params;

    await imageModel
      .destroy({
        where: {
          imageId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: `Success`,
          data,
        });
      })
      .catch((error) => {
        return res.status(500).send({
          message: `${error}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};
export {
  createProductImage,
  getProductImage,
  deleteProductImages,
  deleteOneProductImages,
};
