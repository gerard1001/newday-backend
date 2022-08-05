import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../helpers/userHelper";
const userRoutes = model.User;
const profileRoutes = model.Profile;

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  await userRoutes
    .findOne({
      where: { email },
    })
    .then(async (usedEmail) => {
      if (usedEmail) {
        return res.send({
          error: "email taken!",
        });
      } else {
        const created = await userRoutes
          .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword(password),
            categoryId: req.body.categoryId,
            roleId: req.body.roleId,
            where: {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password,
              categoryId: req.body.categoryId,
              roleId: req.body.roleId,
            },
          })
          .catch((err) => {
            return res.send({ message: "error1", err });
          });

        const gender = req.body.gender;

        if (req.file) {
          req.body.picture = await imageUpload(req);
        } else {
          if (gender == "female") {
            req.body.picture =
              "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
          } else {
            req.body.picture =
              "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";
          }
        }

        await profileRoutes
          .create({
            userId: created.userId,
            picture: req.body.picture,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
          })
          .then((data) => {
            res.send({ message: "Success", data });
          })
          .catch((error) => {
            res.send({ message: "error2", error });
          });
      }
    });
};

const getUser = async (req, res) => {
  await userRoutes.findAll({}).then((data) => {
    return res.status(200).send({
      message: "Fetched all Users",
      body: { data },
    });
  });
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  await userRoutes
    .findOne({
      where: {
        email: id,
      },
      include: [
        {
          model: model.Profile,
          as: "Profiles",
        },
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send({
        message: `failed to get ${error}`,
      });
    });
};

const updateUser = async (req, res) => {
  const id = req.params.id;

  await userRoutes
    .update(req.body, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      where: {
        userId: id,
      },
    })
    .then((data) => {
      res.status(200).send({
        message: "User updated successfully!",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          "An error occured while updating User! The role or category assigned might be unavailable.",
      });
      console.log(err);
    });
};

const deleteUser = async (req, res) => {
  await userRoutes
    .destroy({
      where: {},
      truncate: false,
    })
    .then((data) => {
      res.send({
        message: "Deleted",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Failed ${err}`,
      });
    });
};

const deleteOneUser = async (req, res) => {
  const id = req.params.id;
  await userRoutes
    .destroy({
      where: {
        userId: id,
      },
    })
    .then((data) => {
      if (data == 1) {
        return res.send({
          message: "success",
        });
      }
      return res.send({
        message: "Failed to delete this user!",
      });
    })
    .catch((err) => {
      return res.status(500).send({ err });
    });
};

const userLogin = async (req, res) => {
  try {
    const user = await req.body;
    const userExist = await userRoutes.findOne({
      where: { email: user.email },
    });

    const validation = await comparePassword(
      req.body.password,
      userExist.password
    );

    if (validation) {
      const token = await generateToken(
        {
          email: userExist.email,
          userId: userExist.userId,
          firstName: userExist.firstName,
          lastName: userExist.lastName,
        },
        "1d"
      );
      return res.status(201).header("authenticate", token).send({
        message: `Logged in successfully`,
        token,
        roleId: userExist.roleId,
        userId: userExist.userId,
        firstName: userExist.firstName,
        lastName: userExist.lastName,
      });
    }
    return res.status(400).send({ message: "Incorrect password" });
  } catch (error) {
    return res.status(404).send({
      message: "Invalid credentials.",
    });
  }
};

export {
  registerUser,
  getUser,
  updateUser,
  deleteUser,
  deleteOneUser,
  userLogin,
  getOneUser,
};
