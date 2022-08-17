import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";
import {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
} from "../helpers/userHelper";
import sendEmail from "../helpers/nodemailer";
import jwt from "jsonwebtoken";

const userModel = model.User;
const profileModel = model.Profile;
const addressModel = model.Address;

const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await userModel
      .findOne({
        where: { email },
      })
      .then(async (usedEmail) => {
        if (usedEmail) {
          return res.status(409).send({
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
              return res.status(400).send({ message: "error1", err });
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
              return res.status(400).send({ message: "error2", error });
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
              const message = `
        <h2>Account creation successful.</h2>
        <p>Copy the following token::: <em>${token}</em></p>
        `;
              sendEmail(message, createdUser.email);
              return res.status(201).send({
                message: "Success",
              });
            })
            .catch((error) => {
              return res.status(400).send({
                message: "Error while creating user profile!!!",
                error,
              });
            });
        }
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    const userInfo = decodeToken(token);
    const userId = userInfo.id;

    const user = await userModel.findOne({ where: { userId } });
    await user.update({ userVerified: true }, { where: { id: userId } });
    return res.status(200).send({
      message: "Email verification successful",
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getUser = async (req, res) => {
  try {
    await userModel
      .findAll({ order: [["roleId", "ASC"]] })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all Users",
          body: { data },
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: "ERROR",
          err,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
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
          {
            model: model.ProductComment,
            as: "ProductComments",
            attributes: ["comment"],
            include: [
              {
                model: model.Product,
                as: "Products",
                attributes: ["productName"],
              },
            ],
          },
          {
            model: model.UserArticle,
            as: "UserArticles",
            attributes: ["article", "uaId"],
            include: [
              {
                model: model.UserComment,
                as: "UserComments",
                attributes: ["comment"],
              },
            ],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        return res.send({
          message: `failed to get ${error}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
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
        return res.status(200).send({
          message: "User updated successfully!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message:
            "An error occured while updating User! The role or category assigned might be unavailable.",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        return res.status(200).send({
          message: "Deleted",
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message: `Failed ${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    await userModel
      .destroy({
        where: {
          userId: id,
        },
      })
      .then((data) => {
        if (data == 1) {
          return res.status(200).send({
            message: "success",
          });
        }
        return res.status(400).send({
          message: "Failed to delete this user!",
        });
      })
      .catch((err) => {
        return res.status(400).send({ err });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await req.body;
    const userExist = await userModel.findOne({
      where: { email: user.email },
    });

    const verified = userExist.userVerified;

    const validation = await comparePassword(
      req.body.password,
      userExist.password
    );

    if (validation) {
      if (!verified) {
        return res.status(401).send({
          message:
            "Please reach to your email and click the verify email button to proceed!!!",
        });
      }
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

const resetLink = async (req, res) => {
  try {
    const userExist = await userModel.findOne({
      where: { email: req.body.email },
    });
    if (!userExist) {
      return res.status(404).send({ message: "This user does not exist!!!" });
    }

    const token = jwt.sign({ id: userExist.userId }, process.env.SECRETE, {
      expiresIn: "1d",
    });
    const message = `
          <h2>First step to reseting your password.</h2>
        <p>Copy the following token::: <em>${process.env.FRONTEND_URL}/resetPassword?token=${token}</em></p>
        `;
    sendEmail(message, userExist.email);

    return res.status(200).send({ message: "Reset password message sent!" });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const resetPwd = async (req, res) => {
  try {
    const password = req.body.password;
    const confirm_pass = req.body.confirm_pass;
    if (confirm_pass != password) {
      return res.status(400).send({
        message: "The passords you provided do not match!!!",
      });
    }
    const { token } = req.params;
    const userId = jwt.verify(token, process.env.SECRETE).id;
    await userModel
      .update(
        {
          password: hashPassword(password),
        },
        { where: { userId } }
      )
      .then((data) => {
        if (data == 1) {
          return res.status(201).send({
            message: "Password changed successfully!!!",
            data,
          });
        }
        return res.status(400).send({
          message: "Password reset failed!!!",
          data,
        });
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
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
  resetLink,
  resetPwd,
};
