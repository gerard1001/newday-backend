/* eslint-disable import/prefer-default-export */
import cloudinary from "../config/cloudinary";
import model from "../database/models";

const productModel = model.Product;

export const fileUpload = async (req) => {
  let imageUrl = "";
  await cloudinary.uploader.upload(
    req.file.path,
    { folder: "newday_api/products" },
    async (err, image) => {
      if (err) {
        console.log(err, "********");
        throw new Error(err);
      }
      imageUrl = image.url;
    }
  );
  console.log(imageUrl, "******");
  return imageUrl;
};

export const imageUpload = async (req) => {
  let imageUrl = "";
  await cloudinary.uploader.upload(
    req.file.path,
    { folder: "newday_api/profile" },
    async (err, image) => {
      if (err) {
        console.log(err, "********");
        throw new Error(err);
      }
      imageUrl = image.url;
    }
  );
  return imageUrl;
};

export const imageArrayUpload = async (req, res, next) => {
  const urls = [];
  const imageId = [];
  if (!req.body.images) {
    console.log(req.body);
    return res.status(400).json({ message: "images should not be empty" });
  }

  if (!Array.isArray(req.body.images)) {
    const file = await cloudinary.uploader
      .upload(req.body.images.path)
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
    if (!file) return res.status(400).json({ message: "not able to upload" });
    urls.push(file.url);
    imageId.push(file.public_id);
    req.body.images = urls;
    req.body.imagesId = imageId;
  } else {
    let file;
    for (let i = 0; i < req.body.images.length; i++) {
      file = await cloudinary.uploader.upload(req.body.images[i].path);
      if (!file) return res.status(400).json({ message: "not able to upload" });
      urls.push(file.url);
      imageId.push(file.public_id);
    }
    req.body.images = urls;
    req.body.imagesId = imageId;
  }
  req.data = req.body;
  next();
};

export const updateImageArrayUpload = async (req, res, next) => {
  const { id } = req.params;
  const availableImages = await productModel.findOne({
    where: { productId: id },
  });
  console.log(req.body.images?.type, "*****");
  if (!req.body.images || req.body.images?.type == null) {
    console.log("FIRST CASE");
    const urls = availableImages.dataValues.images;
    const imageId = availableImages.dataValues.imagesId;
    req.body.images = urls;
    req.body.imagesId = imageId;
    req.data = req.body;
    next();
  } else {
    console.log("SECOND CASE");
    const urls = [];
    const imageId = [];
    if (!req.body.images) {
      console.log(req.body);
      return res.status(400).json({ message: "images should not be empty" });
    }

    if (!Array.isArray(req.body.images)) {
      const file = await cloudinary.uploader
        .upload(req.body.images.path)
        .catch((err) => {
          console.log(err);
          throw new Error(err);
        });
      if (!file) return res.status(400).json({ message: "not able to upload" });
      urls.push(file.url);
      imageId.push(file.public_id);
      req.body.images = urls;
      req.body.imagesId = imageId;
    } else {
      let file;
      for (let i = 0; i < req.body.images.length; i++) {
        file = await cloudinary.uploader.upload(req.body.images[i].path);
        if (!file)
          return res.status(400).json({ message: "not able to upload" });
        urls.push(file.url);
        imageId.push(file.public_id);
      }
      req.body.images = urls;
      req.body.imagesId = imageId;
    }
    req.data = req.body;
    next();
  }
  // req.data = req.body;
  // next();
};
