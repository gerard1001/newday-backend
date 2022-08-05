import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";

const profileRoutes = model.Profile;

const createProfile = async (req, res) => {
  // try {
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

  await profileRoutes
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
      res.status(201).send({ message: "Profile created successfully", data });
    })
    .catch((err) => {
      return res.send({ message: "You have an error!", err });
    });
};

const seeProfile = async (req, res) => {
  await profileRoutes.get({});
};

const updateProfile = async (req, res) => {
  await profileRoutes.update();
};

export { createProfile, seeProfile, updateProfile };
