import model from "../database/models";
import { imageUpload } from "../helpers/fileUpload";

const profileModel = model.Profile;
const addressModel = model.Address;

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
    const id = req.params.id;

    if (req.file) {
      req.body.picture = await imageUpload(req);
    }

    //////////////////////////////////////////////////
    const profileUser = await profileModel
      .findOne({
        where: {
          profileId: id,
        },
        include: [
          {
            model: model.Address,
            as: "Address",
          },
        ],
      })
      .catch((error) => {
        console.log(error);
        return res.send({
          message: `failed to get ${error}`,
        });
      });
    //////////////////////////////////////////////////

    const addressId = profileUser.Address.addressId;

    await profileModel
      .update(req.body, {
        picture: req.body.picture,
        birthDate: req.body.birthDate,
        gender: req.body.gender,
        status: req.body.status,
        maritalStatus: req.body.maritalStatus,
        department: req.body.department,
        phoneNumber: req.body.phoneNumber,
        where: {
          profileId: id,
        },
      })
      .catch((error) => {
        return res.status(400).send({ message: "error2", error });
      });

    await addressModel
      .update(req.body, {
        country: req.body.country,
        city: req.body.city,
        street: req.body.street,
        where: {
          addressId: addressId,
        },
      })
      .then((data) => {
        return res.status(200).send({
          message: "User profile updated successfully!",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          message:
            "An error occured while updating User profile! The role or category assigned might be unavailable.",
          err,
        });
      });
  } catch (error) {
    res.status(500).send({
      error: `${error}`,
    });
  }
};

export { createProfile, seeProfile, updateProfile };
