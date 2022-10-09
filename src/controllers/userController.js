import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";
import {
  hashPassword,
  comparePassword,
  generateToken,
  decodeToken,
} from "../helpers/userHelper";
import { sendEmail, sendTweet } from "../helpers/nodemailer";
import jwt from "jsonwebtoken";
import checkToken from "../helpers/checkToken";

const userModel = model.User;
const profileModel = model.Profile;
const addressModel = model.Address;
const reviewModel = model.Review;

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    await userModel
      .findOne({
        where: { email },
      })
      .then(async (usedEmail) => {
        if (usedEmail) {
          return res.status(409).send({
            message: "email taken!",
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
              return res.status(400).send({ message: `${err.message}`, err });
            });
          const token = generateToken({ id: createdUser.userId }, "30d");
          const dcdtkn = decodeToken(token);
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
              city: req.body.city,
              street: req.body.street,
            })
            .then((data) => {
              const message = `
        <h2>Congratulations ${firstName} ${lastName}! your account creation was successful.</h2>
        <p>Copy the following token::: <em>${token}</em></p>
        `;
              sendEmail(message, createdUser.email);
              return res.send({
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
    return res.send({
      message: `${error.message}`,
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
    return res
      .status(200)
      .send({
        message: "Email verification successful",
      })
      .catch((err) => {
        return res.send({
          message: `${err}`,
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: "Error",
    });
  }
};

const subscribeMsg = async (req, res) => {
  try {
    const userToken = checkToken(req);
    const decode = decodeToken(userToken);
    const email = decode.email;
    const id = decode.userId;

    const token = generateToken({ userId: id }, "1d");

    const message = `
        <h2>Got subscription token.</h2>
        <p>Copy the following token::: <em>${token}</em></p>
        `;
    sendTweet(message, email);

    return res.send({
      msg: "Sent subscr...",
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const subscribe = async (req, res) => {
  try {
    const { token } = req.params;
    const userInfo = decodeToken(token);
    const userId = userInfo.userId;

    const user = await userModel.findOne({ where: { userId } });
    await user.update({ isSubscribed: true }, { where: { id: userId } });
    return res.status(200).send({
      message: "You have successfully subscribed to our page.",
    });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const pageAsNbr = Number.parseInt(req.query.page);
    const sizeASNbr = Number.parseInt(req.query.size);

    let page = 0;

    if (!Number.isNaN(pageAsNbr) && pageAsNbr > 0) {
      page = pageAsNbr;
    }

    let size = 20;

    if (!Number.isNaN(sizeASNbr) && sizeASNbr > 0 && size < 100) {
      size = sizeASNbr;
    }

    await userModel
      .findAndCountAll({
        limit: size,
        offset: page * size,
        order: [["roleId", "ASC"]],
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
            attributes: ["article", "userArticleId"],
            include: [
              {
                model: model.UserComment,
                as: "UserComments",
                attributes: ["comment"],
                include: [
                  {
                    model: model.User,
                    as: "Users",
                    attributes: ["email"],
                  },
                ],
                include: [
                  {
                    model: model.Reply,
                    as: "Replies",
                    attributes: ["reply"],
                  },
                ],
              },
            ],
          },
          {
            model: model.Review,
            as: "Reviews",
            attributes: ["review", "rate"],
          },
        ],
      })
      .then((data) => {
        return res.status(200).send({
          message: "Fetched all Users",
          body: data.rows,
          totalPages: Math.ceil(data.count / size),
          currentPage: page + 1,
          count: data.count,
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
            attributes: ["article", "userArticleId"],
            include: [
              {
                model: model.UserComment,
                as: "UserComments",
                attributes: ["comment"],
                include: [
                  {
                    model: model.User,
                    as: "Users",
                    attributes: ["email"],
                  },
                ],
                include: [
                  {
                    model: model.Reply,
                    as: "Replies",
                    attributes: ["reply"],
                  },
                ],
              },
            ],
          },
          {
            model: model.Review,
            as: "Reviews",
            attributes: ["review", "rate"],
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
      return res.status(200).header("authenticate", token).send({
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
          return res.status(200).send({
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

const createReview = async (req, res) => {
  try {
    const token = checkToken(req);
    const decode = decodeToken(token);
    const id = decode.userId;

    const { rate } = req.body;
    if (rate > 5.0) {
      return res.send({
        message: "You can't rate beyond 5.0 please",
      });
    }
    if (rate < 1.0) {
      return res.send({
        message: "You can't rate below 1.0 please",
      });
    }

    await reviewModel.destroy({ where: { userId: id } }).catch((err) => {
      return res.status(500).send({
        message: "err",
      });
    });
    await reviewModel
      .create({
        userId: id,
        review: req.body.review,
        rate: req.body.rate,
      })
      .then((data) => {
        return res.status(200).send({
          message: "success",
          data,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: "err",
        });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const getReviews = async (req, res) => {
  try {
    await reviewModel
      .findAndCountAll({
        include: [
          {
            model: model.User,
            as: "Users",
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
            ],
          },
        ],
      })
      .then((data) => {
        const dt = data.rows.map((iti) => {
          return iti.rate;
        });
        return res.status(200).send({
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

const deleteReviews = async (req, res) => {
  await reviewModel
    .destroy({ where: {} })
    .then((data) => {
      if (data === 1) {
        return res.status(200).send({
          message: `Deleted ${data} review successfully!`,
        });
      } else if (data === 0) {
        return res.status(403).send({
          message: `You don't have any more reviews to delete!`,
        });
      } else {
        return res.status(200).send({
          message: `Deleted ${data} reviews successfully!`,
          data,
        });
      }
    })
    .catch((err) => {
      return res.status(400).send({
        message: `Failed ${err}`,
      });
    });
};

export {
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  deleteOneUser,
  userLogin,
  getOneUser,
  verifyUser,
  subscribeMsg,
  subscribe,
  resetLink,
  resetPwd,
  createReview,
  getReviews,
  deleteReviews,
};
