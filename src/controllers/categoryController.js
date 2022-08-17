import model from "../database/models";

const categoryRoutes = model.Category;

const createCategory = async (req, res) => {
  try {
    await categoryRoutes
      .findOrCreate({
        categoryName: req.body.categoryName,
        where: {
          categoryName: req.body.categoryName,
        },
      })
      .then((created) => {
        if (created[1]) {
          return res.status(201).send({
            message: "successfully created!",
            created,
          });
        } else {
          return res.status(403).send({
            message: "This category already exists!",
          });
        }
      })
      .catch((err) => {
        return res.status(500).send({
          message: `You got an error: ${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getCategory = async (req, res) => {
  try {
    await categoryRoutes
      .findAll({
        order: [["categoryName", "ASC"]],
        include: [
          {
            model: model.subCategoryOne,
            as: "subCategoryOnes",
            attributes: ["catOneName"],
            order: [["catOneName", "ASC"]],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all categories",
          data,
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: `${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneCategory = async (req, res) => {
  try {
    const id = req.params.id;

    await categoryRoutes
      .findOne({
        attributes: ["categoryName"],
        order: [["categoryName", "ASC"]],

        include: [
          {
            model: model.User,
            as: "Users",
            attributes: ["firstName", "lastName", "email"],
          },
          {
            model: model.subCategoryOne,
            as: "subCategoryOnes",
            attributes: ["catOneName"],
            order: [["catOneName", "ASC"]],

            include: [
              {
                model: model.subCategoryTwo,
                as: "subCategoryTwos",
                attributes: ["catTwoName"],
                order: [["catTwoName", "ASC"]],

                include: [
                  {
                    model: model.Product,
                    as: "Products",
                    attributes: ["productName", "price", "productImage"],
                    order: [["productName", "ASC"]],
                  },
                ],
              },
            ],
          },
        ],

        where: {
          categoryName: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all categories",
          data,
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: `${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;

    await categoryRoutes
      .update(req.body, {
        categoryName: req.body.categoryName,
        userId: req.body.userId,
        where: {
          id: categoryId,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Category updated successfully!",
        });
      })
      .catch((err) => {
        return res.status(403).send({
          message: "An error occured while updated category!",
        });
        console.log(err);
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryRoutes
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} category successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} categories successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(403).send({
          message: "An error occured while deleting category!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export {
  createCategory,
  getCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
};
