import model from "../database/models";

const classModel = model.Class;
const categoryModel = model.Category;

const createClass = async (req, res) => {
  try {
    const { catOneName, categoryId } = req.body;
    const existCategory = await categoryModel.findOne({
      where: { categoryId: req.body.categoryId },
    });

    if (!existCategory) {
      return res.status(404).send({
        message: "This category does not exist!",
      });
    }
    if (!catOneName && !categoryId) {
      return res.status(400).send({
        message: "Please make sure you include both catOneName and category",
      });
    }
    await classModel
      .findOrCreate({
        where: {
          catOneName: req.body.catOneName,
          categoryId: req.body.categoryId,
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
            message: "This class already exists!",
          });
        }
      })
      .catch((err) => {
        return res.status(403).send(err);
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getClasses = async (req, res) => {
  try {
    await classModel
      .findAndCountAll({
        order: [["catOneName", "ASC"]],
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
        order: [["catOneName", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            order: [["productName", "ASC"]],
          },
        ],
        where: {
          catOneName: id,
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

const updateClass = async (req, res) => {
  try {
    const id = req.params.id;

    await classModel
      .update(req.body, {
        where: {
          catOneName: id,
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
          catOneName: id,
        },
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
};
