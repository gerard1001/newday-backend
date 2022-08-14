import model from "../database/models";
import { fileUpload } from "../helpers/fileUpload";
const productModel = model.Product;

const createProduct = async (req, res) => {
  const { productName, price } = req.body;

  if (req.file) {
    req.body.productImage = await fileUpload(req);
  } else {
    req.body.productImage =
      "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";
  }

  if (!productName && !price) {
    return res.send({
      message: "Please make sure you include the product name and price!",
    });
  } else {
    productModel
      .findOne({
        where: {
          productName,
        },
      })
      .then((exist) => {
        if (exist) {
          return res.send({
            message: "this product already exists",
          });
        } else {
          return productModel
            .create({
              productName: req.body.productName,
              price: req.body.price,
              catTwoId: req.body.catTwoId,
              productImage: req.body.productImage,
              where: {
                productName: req.body.productName,
                price: req.body.price,
                catTwoId: req.body.catTwoId,
                productImage: req.body.productImage,
              },
            })
            .then((data) => {
              res.status(201).send({
                message: "Success!",
              });
            });
        }
      });
  }
};

const getProduct = async (req, res) => {
  await productModel
    .findAll({
      // attributes: {exclude: [
      //     "categoryId", "classOneId"
      // ]},
    })
    .then((data) => {
      return res.status(200).send({
        message: "List of all fruits available!",
        body: { data },
      });
    })
    .catch((err) => {
      return res.send(err);
    });
};

const updateProduct = async (req, res) => {
  const id = req.params.id;

  if (req.file) {
    req.body.picture = await fileUpload(req);
  }

  // console.log(req.body);
  await productModel
    .update(req.body, {
      where: {
        productId: id,
      },
      // returning: true,
    })
    .then((data) => {
      //    console.log(data);
      if (data == 1) {
        return res.send({
          message: "Updated product successfully!",
        });
      } else {
        return res.send({
          message: `Cannot update product ${id}!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({
        message: "",
      });
    });
};

const deleteOneProduct = async (req, res) => {
  const id = req.params.id;

  await productModel
    .destroy({
      where: {
        productId: id,
      },
    })
    .then((data) => {
      return res.send({
        message: "Deleted product successfully!",
        body: { data },
      });
    })
    .catch((err) => {
      console.log(err);
      return res.send({
        message: "error!",
      });
    });
};

const deleteProduct = async (req, res) => {
  await productModel
    .destroy({
      where: {},
    })
    .then((data) => {
      if (data === 1) {
        return res.send({
          message: `Deleted ${data} product successfully!`,
        });
      } else if (data === 0) {
        return res.send({
          message: `You don't have any more products to delete!`,
        });
      } else {
        return res.send({
          message: `Deleted ${data} products successfully!`,
          data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({
        message: "You got an error@!",
      });
    });
};

export {
  createProduct,
  getProduct,
  updateProduct,
  deleteOneProduct,
  deleteProduct,
};
