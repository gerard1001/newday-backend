import model from "../database/models";

const reviewModel = model.Review;
const ratingModel = model.Rating;

export const getRating = async (req, res) => {
  const rate = await reviewModel.findAll({});
  if (rate == "") {
    console.log("'No ratings yet'");
    return res.send({
      message: "No ratings yet",
    });
  }
  const dt = rate.map((result) => {
    return result.rate;
  });
  var sum = 0;
  for (var i = 0; i < dt.length; i++) {
    sum = sum + Number(dt[i]);
  }
  const avg = sum / rate.length;
  const new_avg = avg.toFixed(1);

  console.log("``````````````````");
  console.log(rate.length);
  console.log(sum);
  console.log(new_avg);
  console.log("``````````````````");

  await ratingModel.destroy({ where: {} }).catch((err) => {
    return res.send({
      message: `${err}`,
    });
  });
  await ratingModel
    .create({
      rating: new_avg,
    })
    .then((data) => {
      return res.send({
        message: "success",
        data,
      });
    })
    .catch((err) => {
      return res.send({
        message: `${err}`,
      });
    });
};

export const fetchRatings = async (req, res) => {
  await ratingModel
    .findAll({})
    .then((data) => {
      return res.send({
        message: "success",
        data,
      });
    })
    .catch((err) => {
      return res.send({
        message: `${err}`,
      });
    });
};
