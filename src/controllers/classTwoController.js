import model from "../database/models";

const classTwoModel = model.subCategoryTwo;
const classOneModel = model.subCategoryOne;

const createClassTwo = async (req, res) => {
  try {
    const { catTwoName, catOneId } = req.body;
    const existCatOne = await classOneModel.findOne({
      where: { catOneId: req.body.catOneId },
    });

    if (!existCatOne) {
      return res.status(404).send({
        message: "This class does not exist!",
      });
    }
    if (!catTwoName && !catOneId) {
      return res.status(400).send({
        message:
          "Please make sure you include both sub category two Name and catOneId",
      });
    }
    await classTwoModel
      .findOrCreate({
        where: {
          catTwoName: req.body.catTwoName,
          catOneId: req.body.catOneId,
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
        return res.status(400).send("err");
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getClassTwo = async (req, res) => {
  try {
    await classTwoModel
      .findAll({
        order: [["catOneId", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            attributes: ["productName", "price"],
            order: [["productName", "ASC"]],
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

const getOneClassTwo = async (req, res) => {
  try {
    const id = req.params.id;

    await classTwoModel
      .findAll({
        order: [["catOneId", "ASC"]],
        include: [
          {
            model: model.Product,
            as: "Products",
            attributes: ["productName", "price"],
            order: [["productName", "ASC"]],
          },
        ],
        where: {
          catTwoName: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all classOne elements",
          body: { data },
        });
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

const updateClassTwo = async (req, res) => {
  try {
    const id = req.params.id;

    await classTwoModel
      .update(req.body, {
        where: {
          catTwoId: id,
        },
      })
      .then((data) => {
        if (data == 1) {
          return res.status(200).send({
            message: "Updated class 2 successfully!",
          });
        } else {
          return res.status(400).send({
            message: `Cannot update class 2 ${id}!`,
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

const deleteClassTwo = async (req, res) => {
  try {
    await classTwoModel
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
  createClassTwo,
  getClassTwo,
  getOneClassTwo,
  updateClassTwo,
  deleteClassTwo,
};
