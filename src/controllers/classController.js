import model from "../database/models";
import { fileUpload } from "../helpers/fileUpload";

const classModel = model.Class;

const createClass = async (req, res) => {
  try {
    const { className } = req.data;

    // if (req.file) {
    //   req.data.coverImage = await fileUpload(req);
    // } else {
    //   req.data.coverImage =
    //     "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";
    // }

    if (!className) {
      return res.status(400).send({
        error: "Please make sure you include the className.",
      });
    }
    await classModel
      .findOrCreate({
        where: {
          className: req.data.className,
          coverImage: req.data.coverImage,
        },
      })
      .then((data) => {
        if (data[1]) {
          return res.status(201).send({
            message: "successfully created!",
            body: { data },
          });
        } else {
          return res.status(409).send({
            error: "This class already exists!",
          });
        }
      })
      .catch((err) => {
        console.log("******************", err);
        return res.status(403).send(err);
      });
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};

const getClasses = async (req, res) => {
  try {
    await classModel
      .findAndCountAll({
        order: [["className", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            order: [["productName", "ASC"]],
          },
          {
            model: model.Category,
            as: "Categories",
            order: [["categoryName", "ASC"]],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all class elements",
          body: data.rows,
          count: data.count,
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: "ERROR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneClass = async (req, res) => {
  try {
    const id = req.params.id;

    await classModel
      .findOne({
        order: [["className", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            order: [["productName", "ASC"]],
          },
        ],
        where: {
          classId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched one class",
          body: { data },
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: "ERROR ",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getClassProducts = async (req, res) => {
  try {
    const id = req.params.id;

    await classModel
      .findOne({
        order: [["className", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            order: [["productName", "ASC"]],
          },
        ],
        where: {
          classId: id,
        },
      })
      .then((datas) => {
        const data = datas.Products;
        console.log(data.Products);
        return res.status(200).send({
          message: "Fetched class's products",
          data,
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: "ERROR ",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const updateClass = async (req, res) => {
  try {
    const id = req.params.id;

    if (req.file) {
      req.body.coverImage = await fileUpload(req);
    } else {
      req.body.coverImage =
        "https://www.pngkit.com/png/detail/5-56812_lineart-by-frankes-line-art-books-on-openclipart.png";
    }

    await classModel
      .update(req.body, {
        where: {
          classId: id,
        },
      })
      .then((data) => {
        if (data == 1) {
          return res.status(200).send({
            message: "Updated class 1 successfully!",
          });
        } else {
          return res.status(400).send({
            message: `Cannot update class 1 ${id}!`,
            data,
          });
        }
      })
      .catch((err) => {
        return res.status(403).send({
          message: "error while trying to update!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteClasses = async (req, res) => {
  try {
    await classModel
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} class one element successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} class one elements successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: "An error occured while deleting category!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteOneClass = async (req, res) => {
  try {
    const id = req.params.id;

    await classModel
      .destroy({
        where: {
          classId: id,
        },
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} class element successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} class elements successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: "An error occured while deleting category!",
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
  createClass,
  getClasses,
  getOneClass,
  updateClass,
  deleteClasses,
  deleteOneClass,
  getClassProducts,
};
