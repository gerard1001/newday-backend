import model from "../database/models";
import checkToken from "../helpers/checkToken";
import { decodeToken } from "../helpers/userHelper";
import { fileUpload } from "../helpers/fileUpload";

const companyModel = model.Company;

export const createCompany = async (req, res) => {
  try {
    const token = checkToken(req);

    const decode = decodeToken(token);

    console.log(req.data, "&&&&&");

    // if (req.file) {
    //   req.body.companyLogo = await fileUpload(req);
    // } else {
    //   req.body.companyLogo =
    //     "https://www.pngkit.com/png/detail/87-873983_huffington-post-logo-tv-logo-png.png";
    // }

    await companyModel
      .findOrCreate({
        userId: decode.userId,
        companyName: req.data.companyName,
        companyLogo: req.data.companyLogo,
        description: req.data.description,
        companyProducts: req.data.companyProducts,
        address: req.data.address,
        where: {
          userId: decode.userId,
          companyName: req.data.companyName,
          companyLogo: req.data.companyLogo,
          description: req.data.description,
          companyProducts: req.data.companyProducts,
          address: req.data.address,
        },
      })
      .then((data) => {
        if (data[1]) {
          console.log(data, req.data);
          return res.status(201).send({
            message: "You have successully registered your company!!!",
            data,
          });
        } else {
          console.log(data, req.data);
          return res.status(409).send({
            error: "This company name is already taken!",
          });
        }
      })
      .catch((err) => {
        console.log(req.data);
        return res.status(400).send(err);
      });
  } catch (error) {
    console.log(req.data);
    return res.status(500).send({
      message: `${error}`,
    });
  }
};

export const getCompanies = async (req, res) => {
  try {
    await companyModel
      .findAll({
        include: [
          { model: model.User, as: "owner" },
          { model: model.Product, as: "Products" },
        ],
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

export const getOneCompany = async (req, res) => {
  try {
    const { id } = req.params;
    await companyModel
      .findOne({
        where: { companyId: id },
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

export const deleteCompanies = async (req, res) => {
  try {
    await companyModel
      .destroy({
        where: {},
        truncate: false,
      })
      .then((data) => {
        if (data === 1) {
          return res.status(200).send({
            message: `Deleted ${data} company successfully!`,
          });
        } else {
          return res.status(200).send({
            message: `Deleted ${data} companies successfully!`,
          });
        }
      })
      .catch((err) => {
        return res.status(403).send({
          error: "An error occured while deleting company!",
        });
      });
  } catch (error) {
    return res.status(500).send({
      error: `${error}`,
    });
  }
};
