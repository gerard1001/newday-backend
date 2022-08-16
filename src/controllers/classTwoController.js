import model from "../database/models";

const classTwoModel = model.subCategoryTwo;
const classOneModel = model.subCategoryOne;

const createClassTwo = async (req, res) => {
  const { catTwoName, catOneId } = req.body;
  const existCatOne = await classOneModel.findOne({
    where: { catOneId: req.body.catOneId },
  });

  if (!existCatOne) {
    return res.send({
      message: "This class does not exist!",
    });
  }
  if (!catTwoName && !catOneId) {
    res.send({
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
        res.status(201).send({
          message: "successfully created!",
          body: { data },
        });
      } else {
        res.send({
          message: "This class already exists!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send("err");

      console.log(err);
    });
};

const getClassTwo = async (req, res) => {
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
      res.status(200).send({
        message: "Fetched all classOne elements",
        body: { data },
      });
    });
};

const getOneClassTwo = async (req, res) => {
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
      res.status(200).send({
        message: "Fetched all classOne elements",
        body: { data },
      });
    });
};

const updateClassTwo = async (req, res) => {
  const id = req.params.id;

  await classTwoModel
    .update(req.body, {
      where: {
        catTwoId: id,
      },
    })
    .then((data) => {
      if (data == 1) {
        return res.send({
          message: "Updated class 2 successfully!",
        });
      } else {
        return res.send({
          message: `Cannot update class 2 ${id}!`,
          data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.send({
        message: "Product updated successfully!",
      });
    });
};

const deleteClassTwo = async (req, res) => {
  await classTwoModel
    .destroy({
      where: {},
      truncate: false,
    })
    .then((data) => {
      if (data === 1) {
        res.status(200).send({
          message: `Deleted ${data} class one element successfully!`,
        });
      } else {
        res.status(200).send({
          message: `Deleted ${data} class one elements successfully!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "An error occured while deleting category!",
      });
      console.log(err);
    });
};

export {
  createClassTwo,
  getClassTwo,
  getOneClassTwo,
  updateClassTwo,
  deleteClassTwo,
};
