import model from "../database/models";

const roleModel = model.Role;

const createRole = async (req, res) => {
  try {
    await roleModel
      .findOrCreate({
        role: req.body.role,
        where: {
          role: req.body.role,
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
            message: "This role already exists!",
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: `You got an error: ${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getRole = async (req, res) => {
  try {
    await roleModel
      .findAll({
        order: [["role", "ASC"]],
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all roles",
          data,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneRole = async (req, res) => {
  try {
    const id = req.params.id;

    await roleModel
      .findOne({
        attributes: ["role"],
        order: [["role", "ASC"]],
        include: [
          {
            model: model.User,
            as: "Users",
            attributes: ["email"],
            order: [["email", "ASC"]],
          },
        ],
        where: {
          role: id,
        },
      })
      .then((data) => {
        const role = data.role;
        return res.status(200).send({
          message: `Fetched list of ${role}s`,
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

const updateRole = async (req, res) => {
  try {
    const id = req.params.id;

    await roleModel
      .update(req.body, {
        where: {
          roleId: id,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "role updated successfylly!",
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: "An error occured while updating role!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    await roleModel
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} role successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} roles successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(400).send({
          message: "An error occured while deleting role!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export { createRole, getRole, getOneRole, updateRole, deleteRole };
