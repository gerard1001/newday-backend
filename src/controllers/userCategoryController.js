import model from "../database/models";

const ucModel = model.User_Category;
const categoryModel = model.Category;
const userModel = model.User;

export const assignUser = async (req, res) => {
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

  console.log("`````````KJBDIBDGSJA`````````", existingRelation);

  if (!existingCategory || !existingUser) {
    return res.send({
      message: "the category or user you are trying assign does not exist!!!",
    });
  }
  if (existingRelation) {
    return res.send({
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
      return res.send({
        message: "Success. Link made btn the user and category!!!",
        data,
      });
    })
    .catch((err) => {
      return res.send(err);
    });
};

export const getAssignments = async (req, res) => {
  await ucModel
    .findAll({})
    .then((data) => {
      return res.send({
        message: "Fetched all the assigned users and categories!!!",
        data,
      });
    })
    .catch((err) => {
      return err;
    });
};

export const getOneAssignment = async (req, res) => {
  const id = req.params.id;

  await ucModel
    .findOne({
      where: {
        ucId: id,
      },
    })
    .then((data) => {
      return res.send({
        message: "Fetched one assignment!!!",
        data,
      });
    });
};
