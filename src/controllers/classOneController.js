import model from "../database/models";

const classOneModel = model.subCategoryOne;
const categoryModel = model.Category;

const createClassOne = async (req, res) => {
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
    await classOneModel
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

const getClassOne = async (req, res) => {
  try {
    await classOneModel
      .findAll({
        order: [["catOneName", "ASC"]],
        include: [
          {
            model: model.subCategoryTwo,
            as: "subCategoryTwos",
            attributes: ["catTwoName"],
            order: [["catTwoName", "ASC"]],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all classOne elements",
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
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneClassOne = async (req, res) => {
  try {
    const id = req.params.id;

    await classOneModel
      .findAll({
        order: [["catOneName", "ASC"]],
        include: [
          {
            model: model.subCategoryTwo,
            as: "subCategoryTwos",
            attributes: ["catTwoName"],
            order: [["catTwoName", "ASC"]],
          },
        ],
        where: {
          catOneName: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all classOne elements",
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

const updateClassOne = async (req, res) => {
  try {
    const id = req.params.id;

    await classOneModel
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

const deleteClassOne = async (req, res) => {
  try {
    await classOneModel
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

const deleteOneClassOne = async (req, res) => {
  try {
    const id = req.params.id;

    await classOneModel
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
  createClassOne,
  getClassOne,
  getOneClassOne,
  updateClassOne,
  deleteClassOne,
  deleteOneClassOne,
};
