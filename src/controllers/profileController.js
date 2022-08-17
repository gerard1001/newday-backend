import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";

const profileModel = model.Profile;

const createProfile = async (req, res) => {
  try {
    const { userId, gender, picture, age, phoneNumber } = req.body;

    if (req.file) {
      req.body.picture = await fileUpload(req);
    } else {
      if (gender === "female") {
        req.body.picture =
          "https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png";
      }
      req.body.picture =
        "https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png";
    }

    await profileModel
      .create({
        where: {
          userId,
          picture,
          age,
          gender,
          phoneNumber,
        },
      })
      .then((data) => {
        return res
          .status(201)
          .send({ message: "Profile created successfully", data });
      })
      .catch((err) => {
        return res.status(400).send({ message: "You have an error!", err });
      });
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const seeProfile = async (req, res) => {
  try {
    await profileModel.get({});
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    await profileModel.update();
  } catch (error) {
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export { createProfile, seeProfile, updateProfile };
