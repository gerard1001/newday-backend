import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";
import {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
} from "../helpers/userHelper";
import sendEmail from "../helpers/nodemailer";

const userModel = model.User;
const profileModel = model.Profile;
const addressModel = model.Address;

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  await userModel
    .findOne({
      where: { email },
    })
    .then(async (usedEmail) => {
      if (usedEmail) {
        return res.send({
          error: "email taken!",
        });
      } else {
        const createdUser = await userModel
          .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword(password),
            roleId: req.body.roleId,
            where: {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password,
              roleId: req.body.roleId,
            },
          })
          .catch((err) => {
            return res.send({ message: "error1", err });
          });

        const token = generateToken({ id: createdUser.userId }, "1d");
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

        const createdProfile = await profileModel
          .create({
            userId: createdUser.userId,
            picture: req.body.picture,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
          })
          .catch((error) => {
            res.send({ message: "error2", error });
          });

        await addressModel
          .create({
            profileId: createdProfile.profileId,
            country: req.body.country,
            province: req.body.province,
            district: req.body.district,
            sector: req.body.sector,
            street: req.body.street,
          })
          .then((data) => {
            // res.send({ message: "Success" });
            const message = `
        <h2>Your account has been registered. you can now login in</h2>
        <p>Copy the following token<em>${token}</em></p>
        `;
            sendEmail(message, createdUser.email);
            res.send({
              message: "user_created",
            });
          })
          .catch((error) => {
            res.send({
              message: "Error while creating user profile!!!",
              error,
            });
          });
      }
    });
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    const userInfo = decodeToken(token);
    const userId = userInfo.id;

    console.log(userId);

    const user = await userModel.findOne({ where: { userId } });
    await user.update({ userVerified: true }, { where: { id: userId } });
    return res.status(200).send({
      message: "Email verification successful",
    });
  } catch (error) {
    return res.send({ message: `Failure ${error}` });
  }
};

const getUser = async (req, res) => {
  await userModel.findAll({}).then((data) => {
    return res.status(200).send({
      message: "Fetched all Users",
      body: { data },
    });
  });
};

const getOneUser = async (req, res) => {
  const id = req.params.id;
  await userModel
    .findOne({
      where: {
        email: id,
      },
      include: [
        {
          model: model.Profile,
          as: "Profiles",
          include: [
            {
              model: model.Address,
              as: "Addresses",
            },
          ],
        },
        {
          model: model.Category,
          as: "Categories",
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

  await userModel
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
  await userModel
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
  await userModel
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
    const userExist = await userModel.findOne({
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
  verifyUser,
};
