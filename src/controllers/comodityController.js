import model from "../database/models";

const comodityModel = model.Comodity;

export const createComodity = async (req, res) => {
  try {
    await comodityModel
      .findOrCreate({
        comodityName: req.body.comodityName,
        description: req.body.description,
        where: {
          comodityName: req.body.comodityName,
          // description: req.body.description,
        },
      })
      .then((data) => {
        if (data[1]) {
          return res.status(201).send({
            message: "You have successully added a new comodity!!!",
            data,
          });
        } else {
          return res.status(409).send({
            error: "This comodity name is already taken!",
          });
        }
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

export const getComodities = async (req, res) => {
  try {
    await comodityModel
      .findAll({
        // include: [{ model: model.User, as: "Users", attributes: ["email"] }],
      })
      .then((data) => {
        return res.send({
          message: "success",
          data,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: `${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const deleteComodities = async (req, res) => {
  try {
    await comodityModel
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} comodity successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} comodities successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(403).send({
          error: "An error occured while deleting comodity!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};
