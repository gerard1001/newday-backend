import model from "../database/models";
import { fileUpload } from "../helpers/fileUpload";

const productModel = model.Product;
const classModel = model.Class;

const createProduct = async (req, res) => {
  try {
    const { productName, price, classId } = req.body;
    const existCatOne = await classModel.findOne({
      where: { classId },
    });

    if (!existCatOne) {
      return res.status(404).send({
        message: "This class does not exist!",
      });
    }

    if (req.file) {
      req.body.productImage = await fileUpload(req);
    } else {
      req.body.productImage =
        "https://www.pngkit.com/png/detail/790-7904074_silhouette-at-getdrawings-com-free-for-personal-online.png";
    }

    if (!productName && !price) {
      return res.status(400).send({
        message: "Please make sure you include the product name and price!",
      });
    } else {
      productModel
        .findOne({
          where: {
            productName,
            classId,
          },
        })
        .then((exist) => {
          if (exist) {
            return res.status(409).send({
              message: "this product already exists",
            });
          } else {
            return productModel
              .create({
                productName: req.body.productName,
                price: req.body.price,
                description: req.body.description,
                size: req.body.size,
                classId: req.body.classId,
                productImage: req.body.productImage,
                where: {
                  productName: req.body.productName,
                  price: req.body.price,
                  description: req.body.description,
                  size: req.body.size,
                  classId: req.body.classId,
                  productImage: req.body.productImage,
                },
              })
              .then((data) => {
                return res.status(201).send({
                  message: "Success!",
                  data,
                });
              })
              .catch((err) => {
                return res.status(400).send({
                  message: "ERR",
                  err,
                });
              });
          }
        });
    }
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const pageAsNbr = Number.parseInt(req.query.page);
    const sizeASNbr = Number.parseInt(req.query.size);

    let page = 0;

    if (!Number.isNaN(pageAsNbr) && pageAsNbr > 0) {
      page = pageAsNbr;
    }

    let size = 50;

    if (!Number.isNaN(sizeASNbr) && sizeASNbr > 0 && size < 100) {
      size = sizeASNbr;
    }

    await productModel
      .findAndCountAll({
        limit: size,
        offset: page * size,
        include: [
          {
            model: model.ProductComment,
            as: "ProductComments",
            // attributes: ["comment"],
          },
          {
            model: model.Class,
            as: "Classes",
            include: [
              {
                model: model.Category,
                as: "Categories",
              },
            ],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send({
          message: "List of all products available!",
          body: data.rows,
          totalPages: Math.ceil(data.count / size),
          currentPage: page + 1,
          count: data.count,
        });
      })
      .catch((err) => {
        console.log(err);
        return res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productModel
      .findOne({
        where: { productName: id },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched",
          body: { data },
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: "ERROR",
          err,
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (req.file) {
      req.body.picture = await fileUpload(req);
    }

    await productModel
      .update(req.body, {
        where: {
          productId: id,
        },
      })
      .then((data) => {
        if (data == 1) {
          return res.status(200).send({
            message: "Updated product successfully!",
          });
        } else {
          return res.status(400).send({
            message: `Cannot update product ${id}!`,
            data,
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: "ERR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteOneProduct = async (req, res) => {
  try {
    const id = req.params.id;

    await productModel
      .destroy({
        where: {
          productId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted product successfully!",
          body: { data },
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: "error!",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productModel
      .destroy({
        where: {},
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} product successfully!`,
          });
        } else if (data === 0) {
          return res.status(403).send({
            message: `You don't have any more products to delete!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} products successfully!`,
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

export {
  createProduct,
  getProduct,
  updateProduct,
  deleteOneProduct,
  deleteProduct,
  getOneProduct,
};
