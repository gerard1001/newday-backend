import model from "../database/models";

const cpModel = model.Class_Product;
const classModel = model.Class;
const productModel = model.Product;

export const assignProduct = async (req, res) => {
  try {
    const existingProduct = await productModel.findOne({
      where: {
        productId: req.body.productId,
      },
    });

    const existingClass = await classModel.findOne({
      where: {
        classId: req.body.classId,
      },
    });

    const existingRelation = await cpModel.findOne({
      where: { classId: req.body.classId, productId: req.body.productId },
    });

    console.log("existingProduct", existingRelation);

    if (!existingClass || !existingProduct) {
      return res.status(404).send({
        message: "The product or Class you are trying assign don't exist!!!",
      });
    }
    if (existingRelation) {
      return res.status(409).send({
        message: "This relation has aready been established!!!",
      });
    }
    await cpModel
      .create({
        classId: req.body.classId,
        productId: req.body.productId,
        where: {
          classId: req.body.classId,
          productId: req.body.productId,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Success. Link made btn the class and product!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getAssignments = async (req, res) => {
  try {
    await cpModel
      .findAndCountAll({})
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all the assigned classes and products!!!",
          body: data.rows,
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

export const getOneAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    await cpModel
      .findOne({
        where: {
          classProductId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched one assignment!!!",
          data,
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

export const deleteOneAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    await cpModel
      .destroy({
        where: {
          categoryClassId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted one assignment!!!",
          data,
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

export const deleteAllAssignments = async (req, res) => {
  try {
    await cpModel
      .destroy({
        where: {},
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted all assignments!!!",
          data,
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
