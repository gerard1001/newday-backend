import model from "../database/models";

const ucModel = model.User_Category;
const categoryModel = model.Category;
const userModel = model.User;

export const assignUser = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({
      where: {
        userId: req.body.userId,
      },
    });

    const existingCategory = await categoryModel.findOne({
      where: {
        categoryId: req.body.categoryId,
      },
    });

    const existingRelation = await ucModel.findOne({
      where: { userId: req.body.userId, categoryId: req.body.categoryId },
    });

    if (!existingCategory || !existingUser) {
      return res.status(404).send({
        message:
          "The category or user you are trying assign no longer exists!!!",
      });
    }
    if (existingUser.roleId != 2 && existingUser.roleId != 3) {
      return res.status(400).send({
        message: "You can't assign this category to client or admin.",
      });
    }
    if (existingRelation) {
      return res.status(409).send({
        message: "This relation has aready been established!!!",
      });
    }
    await ucModel
      .create({
        userId: req.body.userId,
        categoryId: req.body.categoryId,
        where: {
          userId: req.body.userId,
          categoryId: req.body.categoryId,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Success. Link made btn the user and category!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getAssignments = async (req, res) => {
  try {
    await ucModel
      .findAll({})
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all the assigned users and categories!!!",
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

export const getOneAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    await ucModel
      .findOne({
        where: {
          ucId: id,
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
