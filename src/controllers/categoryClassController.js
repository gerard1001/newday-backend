import model from "../database/models";

const ccModel = model.Category_Class;
const categoryModel = model.Category;
const classModel = model.Class;

export const assignClass = async (req, res) => {
  try {
    const existingClass = await classModel.findOne({
      where: {
        classId: req.body.classId,
      },
    });

    const existingCategory = await categoryModel.findOne({
      where: {
        categoryId: req.body.categoryId,
      },
    });

    const existingRelation = await ccModel.findOne({
      where: { classId: req.body.classId, categoryId: req.body.categoryId },
    });

    if (!existingCategory || !existingClass) {
      return res.status(404).send({
        message:
          "The category or Class you are trying assign no longer exists!!!",
      });
    }
    if (existingRelation) {
      return res.status(409).send({
        message: "This relation has aready been established!!!",
      });
    }
    await ccModel
      .create({
        classId: req.body.classId,
        categoryId: req.body.categoryId,
        where: {
          classId: req.body.classId,
          categoryId: req.body.categoryId,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Success. Link made btn the class and category!!!",
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
    await ccModel
      .findAndCountAll({})
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all the assigned classes and categories!!!",
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

    await ccModel
      .findOne({
        where: {
          categoryClassId: id,
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

// export const getCategoryClasses = async (req, res) => {
//   try {
//     const id = req.params.id;
//   } catch (error) {
//     return res.status(500).send({
//       message: `${error}`,
//     });
//   }
// };
