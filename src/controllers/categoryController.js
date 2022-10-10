import model from "../database/models";

const categoryRoutes = model.Category;

const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    if (categoryName == "") {
      return res.status(400).send({
        error: "Fill in the missing field please.",
      });
    }
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
          return res.status(409).send({
            error: "This category already exists!",
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          error: `Please include the category name. ${err}`,
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
      .findAndCountAll({
        order: [["categoryName", "ASC"]],
        include: [
          {
            model: model.User,
            as: "Users",
          },
          {
            model: model.Class,
            as: "Classes",
          },
        ],
      })
      .then((data) => {
        console.log(data);
        return res.status(200).send({
          message: "Fetched all categories",
          body: data.rows,
          count: data.count,
        });
      })
      .catch((err) => {
        console.log("++++++++++++++++++=", err.message);
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
        order: [["categoryName", "ASC"]],

        include: [
          {
            model: model.User,
            as: "Users",
          },
          {
            model: model.Class,
            as: "Classes",
          },
        ],

        where: {
          categoryId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched One category",
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

const getCategoryClasses = async (req, res) => {
  try {
    const id = req.params.id;

    if (id == "" || id == undefined) {
      console.log("NOOOOO IDDDDDDD!!");
      return res.send({
        message: "NOOOOO IDDDDDDD!!!",
      });
    }

    await categoryRoutes
      .findOne({
        order: [["categoryName", "ASC"]],

        include: [
          {
            model: model.User,
            as: "Users",
          },
          {
            model: model.Class,
            as: "Classes",
          },
        ],

        where: {
          categoryId: id,
        },
      })
      .then((datas) => {
        const data = datas.Classes;
        console.log("````````               ````````````", id);
        return res.status(200).send({
          message: "Fetched all category classes",
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
    const { id } = req.params;

    await categoryRoutes
      .update(req.body, {
        categoryName: req.body.categoryName,
        userId: req.body.userId,
        where: {
          categoryId: id,
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
          error: "An error occured while deleting category!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};

const deleteOneCategory = async (req, res) => {
  try {
    const id = req.params.id;

    await categoryRoutes
      .destroy({
        where: {
          categoryId: id,
        },
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} category element successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} category elements successfully!`,
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
  createCategory,
  getCategory,
  getOneCategory,
  getCategoryClasses,
  updateCategory,
  deleteCategory,
  deleteOneCategory,
};
